import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import './Orders.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const user = useSelector((state) => state.auth);
    const url = "https://swifkart-backend.vercel.app/api/orders";

    useEffect(() => {
        if (!user._id) {
            setRedirect(true);
            return;
        }

        axios.get(`${url}/user/${user._id}`)
            .then(response => setOrders(response.data))
            .catch(err => console.log(err.message));
    }, [user._id]);

    if (redirect) {
        return <Navigate to="/login" />;
    }

    return (
        <div className='orders-wrapper'>
            <div className="orders-container">
                <p className='orders-title'>My Orders</p>
                <div className="orders-cards">
                    {orders.map(order => (
                        <div className="orders-card" key={order._id}>
                            <div className="orders-left-section">
                                <FontAwesomeIcon className='orders-bag-icon' icon={faBagShopping} />
                            </div>
                            <div className="orders-middle-section">
                                <p className='orders-id'>Order ID: {order._id}</p>
                                <p className='orders-total'>Total: £{(order.total / 100).toFixed(2)}</p>
                            </div>
                            <div className="orders-right-section">
                                <Link to={`/orders/${order._id}`}><button className='view-details-btn'>View Details</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Orders;
