import React from 'react'
import { productsApi, useGetAllProductsQuery } from '../features/productsApi';
import './Home.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Home() {

  const {data, error, isLoading} = useGetAllProductsQuery()
  return (
    <>
      <div className="home-wrapper">
        <div className="home-container">
            {isLoading ? <p>Loading...</p> : error ? 
            <p>An error occured...</p> : 
            <>
            <div className="products">
              {data?.map(product => <div key={product.id} className="product">
                  
                  <img src={product.image} alt="" draggable="false"/>
                  <p className='product-name'>{product.name}</p>
                  <div className="details">
                    <div className="tags">
                      <span className='desc'>{product.desc}</span>
                      <span className='size'>300ml</span>
                    </div>
                    <span className="price">£{product.price}</span>
                  </div>
                  <button><FontAwesomeIcon className='add-cart-icon' icon={faCartShopping}/>Add To Cart</button>
                </div> )}
            </div>
            </> }
          </div>
      </div>
    </>
  )
}

export default Home