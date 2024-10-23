# Swifkart Online Store

Swifkart is a fully developed e-commerce application featuring a full-stack architecture. The project includes a React and Redux frontend, a Node.js and Express backend, and MongoDB for data storage. It also integrates Stripe for secure payment processing.

## Features

- **User Authentication**: Secure user registration and login with JWT.
- **Product Management**: Add, update, and delete products.
- **Shopping Cart**: Add products to the cart and proceed to checkout.
- **Order Processing**: Place orders and pay securely using Stripe.
- **Order History**: View a list of past orders.
- **Order Details**: Access detailed order information via unique URLs for each order.

## Project Structure

- **Frontend**: Built with React and Redux
  - User interface for browsing products, managing a shopping cart, processing payments, viewing order history, and accessing detailed order information.

- **Backend**: Utilizes Node.js, Express, and MongoDB
  - RESTful API for handling user authentication, product management, order processing, and storing order data with unique URLs for detailed orders.
  - Stripe integration for secure payment processing.

## Demo Website

The Swifkart application has been deployed using Vercel. The environment variables have been configured in the Vercel dashboard, and the deployment is integrated with the GitHub repository. You can access the live demo at:

[swifkart.arnav27.com](https://swifkart.arnav27.com/)

## Usage

1. Access the demo website at [swifkart.arnav27.com](https://swifkart.arnav27.com/).
2. Add products to the cart.
3. Proceed to checkout.
4. Complete payments using Stripe:
   - Use the following test card information:
     - **Card Number**: 4242 4242 4242 4242
     - **Expiry Date**: Any future date
     - **CVC**: Any 3-digit number
     - **Billing Postal Code**: Any postal code
   - Click **Pay**.
   - You will be redirected to a success page.
5. Navigate to the **Order History** page to view a list of your past orders.
6. Click on an order to view detailed information, which is accessible via a unique URL.

For more details on testing payments, refer to the [Stripe Testing Documentation](https://docs.stripe.com/payments/accept-a-payment?platform=web&ui=stripe-hosted&locale=en-GB#testing).

## Technologies Used

- **Frontend**: React.js, React-Redux, React-Router-Dom, Vite, CSS3, HTML5
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Processing**: Stripe
- **Other**: Git, GitHub, JavaScript, Toast Notifications, Vercel Deployment
