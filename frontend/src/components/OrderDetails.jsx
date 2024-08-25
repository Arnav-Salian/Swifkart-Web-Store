import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './OrderDetails.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBox, faTruck, faWallet } from '@fortawesome/free-solid-svg-icons'

function OrderDetails() {
    document.title = "Order Details | Swifkart Online Store";
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const url = "https://swifkart-backend.vercel.app/api/orders";

    useEffect(() => {
        axios.get(`${url}/${orderId}`)
            .then(response => {
                setOrder(response.data);
                setError(null);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Failed to load order details.');
                setLoading(false);
            });
    }, [orderId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!order) return <p>No order found.</p>;

    const subtotalInPounds = (order.subtotal / 100).toFixed(2);
    const totalInPounds = (order.total / 100).toFixed(2);

    // Format createdAt if available
    const createdAt = order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A';

    return (
        <div className='order-details-wrapper'>
            <div className="order-details-container">
                <div className="order-details-container-plus">
                    <p className='order-details-id-title'>Order ID: <span className='order-id-span'>{order._id}</span></p>
                    <div className="details-summary-section">
                        <p><b>Created:</b> {createdAt}</p>
                        <p><b>Subtotal:</b> £{subtotalInPounds}</p>
                        <p><b>Total:</b> £{totalInPounds}</p>
                    </div>
                    <div className="order-details-products-container">
                        <p className='order-details-products-title'>Products</p>
                        <ul className='products-cards'>
                            {order.products && Array.isArray(order.products) ? (
                                order.products.map(product => (
                                    <>
                                        
                                        <li className='products-card' key={product.id}>
                                            <div className="products-icon"><FontAwesomeIcon icon={faBox} className='product-icon' /></div>
                                            <div className="product-information">
                                                <p><b>Name:</b> {product.name}</p>
                                                <p><b>Price:</b> £{product.price}</p>
                                                <p><b>Quantity:</b> {product.cartQuantity}</p>
                                            </div>
                                            
                                        </li>
                                    </>  
                                ))
                            ) : (
                                <p>No products found.</p>
                            )}
                        </ul>
                    </div>
                    <p className='shipping-info-order-details'>Shipping Information</p>
                    <div className="order-details-updates-section">

                        <p><b><FontAwesomeIcon icon={faTruck} /> Delivery Status:</b> <span className='cap-status'>{order.delivery_status || 'N/A'}</span></p>
                        <p><b><FontAwesomeIcon icon={faWallet} /> Payment Status:</b> <span className='cap-status'>{order.payment_status || 'N/A'}</span></p>
    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;
