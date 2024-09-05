import OrderDetailsProduct from "../../Components/OrderDetailProduct/OrderDetailProduct";

import { useParams } from "react-router";
import axios from "axios";
import { useContext, useEffect } from "react";
import UserCart from "../../Context/UserCart";
import GetcartbyId from "../../hooks/GetcartbyId";
import { useState } from "react";
import './Cart.css'
import UserContext from "../../Context/UserContext";
function Cart(){
    const {userid}=useParams();
    const[cart]=GetcartbyId(userid);
    const [products, setProducts] = useState([]);
    const {setCart} = useContext(UserCart);
    const {user}=useContext(UserContext);
    function getProduct(id) {
        return `http://localhost:8765/products/${id}`;
    }
    async function onProductUpdate(productId, quantity) {
        if(!user) return;
        const response = await axios.put(updateProductInCart(), {userId: user.id, productId, quantity});
        setCart({...response.data});
    }
  
    async function downloadCartProducts(cart) {
        if(!cart || !cart.products) return;

        // object productid->quantity
        const productQuantityMapping = {}; // { 1: 3, 2: 1}
        cart.products.forEach(product => {
            productQuantityMapping[product.productId] = product.quantity;
        })
        const productsPromise = cart.products.map(product => axios.get(getProduct(product.productId)));
        const productPromiseResponse = await axios.all(productsPromise);   
        const downloadedProducts = productPromiseResponse.map(product => ({...product.data, quantity: productQuantityMapping[product.data.id]}));
        setProducts(downloadedProducts);
    }
    function updateProductInCart(){
        `http://localhost:8765/carts/updateProduct`;
    }
    async function onProductUpdate(productId, quantity) {
        if(!user) return;
        const response = await axios.put(updateProductInCart(), {userId: user.id, productId, quantity});
        setCart({...response.data});
    }
    useEffect(() => {
        downloadCartProducts(cart);
    }, [cart])
    

    useEffect(()=>{

    },[cart]);
 
    

    return (
        <div className="container">
            <div className="row">
                <h2 className="cart-title text-center">Your cart</h2>
                <div className="cart-wrapper d-flex flex-row">
                    <div className="order-details d-flex flex-column" id="orderDetails">
                        <div className="order-details-title fw-bold">Order Details</div>
                        {products.length > 0 && products.map(product => <OrderDetailsProduct 
                                                                        key={product.id} 
                                                                        title={product.title}
                                                                        image={product.image}
                                                                        price={product.price}
                                                                        quantity={product.quantity}
                                                                        onRemove={() => onProductUpdate(product.id, 0)}
                                                                        />)}
                    </div>

                    <div className="price-details d-flex flex-column" id="priceDetails" mr="1rem" >
                        <div className="price-details-box">


                            <div className="price-details-title fw-bold">Price Details</div>
                            <div className="price-details-data">
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Price</div>
                                    <div id="total-price"></div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Discount</div>
                                    <div>10</div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Delivery Charges</div>
                                    <div>FREE</div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Total</div>
                                    <div id="net-price"></div>
                                </div>
                            </div>

                        </div>
                        <div className="price-details-btn-group">
                            <a href="productList.html" className="continue-shopping-btn btn btn-info text-decoration-none">
                                Continue Shopping
                            </a>
                            <a href="checkout.html" className="checkout-btn btn btn-primary text-decoration-none">
                                Checkout
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}
export default  Cart;