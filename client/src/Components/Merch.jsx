import React from "react";
import "../Styles/Merch.css"
export default function Merch(){

    return(
        <div className="merch-container">

           <div class="product-card">
    <div class="product-image">
        <img  alt="Product Name" />
    </div>
    <div class="product-details">
        <h2 class="product-title">Product Name</h2>
        <p class="product-description">Product description goes here. Provide key features and details about the product.</p>
        <p class="product-price">$99.99</p>
        <button class="add-to-cart-button">Add to Cart</button>
    </div>
    
</div>
<div class="product-card">
    <div class="product-image">
        <img  alt="Product Name" />
    </div>
    <div class="product-details">
        <h2 class="product-title">Product Name</h2>
        <p class="product-description">Product description goes here. Provide key features and details about the product.</p>
        <p class="product-price">$99.99</p>
        <button class="add-to-cart-button">Add to Cart</button>
    </div>
</div>
</div>
        
    )
}