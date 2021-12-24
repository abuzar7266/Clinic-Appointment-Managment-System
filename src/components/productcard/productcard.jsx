import React from 'react';

import { Link } from 'react-router-dom'

const ProductInfo = {
    id:"1",
    name:"Granite Peak 24",
    quantity:"7",
    productdescription:"Granite Mountain Bike",
    category: "Bicycle",
    rentcharges: "1000",
    maxDayLimit: "10",
    finePerDay: "50",
    thumbnail: "../../public/assets/img/prod-1.png"
  }
  
  
  const ProductCard = (props) => {
  
  
      return (
  
    
              <div className="col-sm-2 col-lg-2">
                <div className="product-item">
                  <ul className="product-icon-top">
                    <li><a href="#"><i className="fa fa-refresh" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a></li>
                  </ul>
                  <a href="single-shop.html" className="product-img">
                  <img className="lazy" src={"../assets/img/prod-1.png"} data-src="../assets/img/prod-1.png" /></a>
                  <br></br>
                  <div className="product-item-cover">
                    <div className="price-cover">
                      <div className="new-price">Rent per Day : ${props.productinfo.rentcharges}</div>
                      <div className="old-price">Stock : {props.productinfo.quantity} </div>
                    </div>
                    <h6 className="prod-title">
                    <a href="single-shop.html">{props.productinfo.productdescription} <br />
                                                Category: {props.productinfo.category} 
                                                          
                    </a>
                    </h6>
                    <Link to='/booking'>
                    <span><button >Book Now</button></span>
                    </Link>
                    
                  </div>
                  <div className="prod-info">
                    <ul className="prod-list">
                      <li>Product Id:  <span>{props.productinfo.id}</span></li>
                      <li>Fine per day: <span>{props.productinfo.finePerDay}</span></li>
                      <li>Max Day Limit: <span>{props.productinfo.maxDayLimit}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
      
        
      );
  
  }
  


  export default ProductCard;