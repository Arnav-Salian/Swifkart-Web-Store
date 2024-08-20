import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightToBracket, faCartShopping, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './Cart.css'


function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <>
      <div className="cart-wrapper">
        <div className="cart-container">
          <h2><FontAwesomeIcon className='cart-icons' icon={faCartShopping}/>Shopping Cart</h2>
          {cart.cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is currently empty!</p>
              <Link to="/"><button className='back-to-shop'><FontAwesomeIcon className='cart-icons' icon={faArrowLeftLong}/>Start Shopping</button></Link>
            </div>
          ) : (
          <>
            <div className="cart-table">
              <div className="cart-items">
                <div className="titles">
                  <p className="product-title">Product</p>
                  <p className="prices">Price</p>
                  <p className="quantity">Quantity</p>
                  <p className="total">Total</p>
                </div>
                {cart.cartItems?.map(cartItem => (
                  <div className="cart-item" key={cartItem.id}>
                    <div className="cart-product">
                      <img src={cartItem.image} alt="" draggable="false"/>
                      <div className="cart-details">
                        <p className='cart-product-name'>{cartItem.name}</p>
                        <div className="cart-tags">
                          <p className='cart-product-desc'>{cartItem.desc}</p>
                          <p className='cart-product-size'>300ml</p>
                        </div>
                        
                        <button><FontAwesomeIcon className='cart-icons' icon={faTrashCan}/>Remove</button>
                      </div>
                    </div>
                    <div className="cart-product-price">£{cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button>-</button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button>+</button>
                    </div>
                    <div className="cart-product-total-price">
                      £{((cartItem.price) * (cartItem.cartQuantity)).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <button className='clear-cart'><FontAwesomeIcon className='cart-icons' icon={faTrash}/>Clear Cart</button>
                <div className="cart-checkout">
                  <div className="sub-total">
                    <span>Subtotal</span>
                    <span className='amount'>£{cart.cartTotalAmount}</span>
                  </div>
                  <p>Taxes and shipping calculated at checkout</p>
                  <button className='checkout-btn'>Checkout<FontAwesomeIcon className='cart-icons-checkout' icon={faArrowRightToBracket}/></button>
                  <Link to="/"><button className='back-to-shop'><FontAwesomeIcon className='cart-icons' icon={faArrowLeftLong}/>Continue Shopping</button></Link>
                </div>
              </div>
            </div>

          </>)}
        </div>
      </div>
    </>
  )
}

export default Cart