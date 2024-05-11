'use client'
import React, { useState } from "react";
import ProductContext from "./ProductContext";

const ProductContextProvider = ({ children }) => {
    const storedProducts =  JSON.parse(window.localStorage.getItem("products"));
    const wishedProducts =  JSON.parse(window.localStorage.getItem("wishlist"));
    const cartLocal =  JSON.parse(window.localStorage.getItem("cart"));
    const cartItemLocal =  JSON.parse(window.localStorage.getItem("cartItem"))

    const [productData, setProductData] = useState(storedProducts || [])
    const [wishlist, setWishlist] = useState(wishedProducts || [])
    const [cart, setCart] = useState(cartLocal || [])
    const [cartItem, setCartItem] = useState(cartItemLocal || [])
    return (
        <ProductContext.Provider value={{ productData, setProductData, setWishlist, wishlist, cart, setCart, cartItem, setCartItem }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider