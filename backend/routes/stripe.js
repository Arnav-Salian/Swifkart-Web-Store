const express = require("express");
const Stripe = require("stripe");
const { Order } = require("../models/order");

require("dotenv").config();
const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const cartItems = req.body.cartItems.map((item, index) => ({
        id: item.id,
        name: item.name,
        quantity: item.cartQuantity,
        price: item.price,
    }));

    const customer = await stripe.customers.create({
      metadata: {
        userId: req.body.userId,
        cart: JSON.stringify(cartItems), 
      },
    });

    const line_items = req.body.cartItems.map((item) => {
        return {
            price_data: {
                currency: 'gbp',
                product_data: {
                  name: item.name,
                  images: [item.image],
                  description: `${item.desc}, 300ml`, 
                  metadata: {
                    id: item.id
                  },
                },
                unit_amount: item.price * 100,
              },
              quantity: item.cartQuantity,
        };
    });

    const session = await stripe.checkout.sessions.create({
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['GB', 'IN'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'gbp',
            },
            display_name: 'Free shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 300,
              currency: 'gbp',
            },
            display_name: 'Swif-Delivery ',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 1,
              },
            },
          },
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      customer: customer.id,
      line_items,
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/a8F9kL9zQ2xV7wT5mN3bJ6oP1rD0eG8uH2yI7Z5cX3vW9tK6sM4qL8nB7pQ2rD0eG8uH2yI7Z5cX3vW9tK6sM4qL8nB7pQ2rD0eG8uH2yI7Z5cX3vW9tK6sM4qL8nB7pQ2rD0eG8uH2yI7Z5cX3vW9tK6sM4qL8nB7`,
      cancel_url: `${process.env.FRONTEND_URL}/cart`,
    });
  
    res.send({url: session.url});
});


const createOrder = async(customer, data) => {
  const Items = JSON.parse(customer.metadata.cart);
  const newOrder = new Order({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products: Items.map(item => ({
      id: item.id,
      name: item.name,
      desc: item.desc,
      price: item.price,
      image: item.image,
      cartQuantity: item.quantity,
    })),
    subtotal: data.amount_subtotal,
    total: data.amount_total,
    shipping: data.customer_details,
    payment_status: data.payment_status,
  });
  try{
    const savedOrder = await newOrder.save();
    console.log("Processed Order...", savedOrder);
  } catch (err){
    console.log(err);
  };
};

// Stripe Webhook

let endpointSecret;

router.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];

  let data;
  let eventType;

  if (endpointSecret) {
    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      console.log("Webhook verified!");
    } catch (err) {
      console.log("Webhook Error...");
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    data = event.data.object;
    eventType = event.type;
  } else {
    data = req.body.data.object;
    eventType = req.body.type;
  }

  if (eventType === "checkout.session.completed"){
    stripe.customers
    .retrieve(data.customer)
    .then((customer) => {
      createOrder(customer, data)
    }).catch(err => console.log(err.message));
  };

  res.send().end();
});

module.exports = router;
