import React from "react";
import "../Styles/Merch.css"


export default function ProductCard(props){
    const {name, description,price} =props;

    return(
        <div className="Sauce-container">
        <div class="product-card">
 <div className="product-image">
     <img  src="../src/assets/stocksauce.jpg" />
 </div>
 <div className="product-details">
     <h2 className="product-title">{name}</h2>
     <p className="product-description">{description}</p>
     <p className="product-price">${price}</p>
     <button className="add-to-cart-button">Add to Cart</button>
 </div>
</div>
</div>
    )
}