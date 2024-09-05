import { useParams, useNavigate } from 'react-router';
import './ProductDetails.css';
import GetProductById from '../../hooks/GetProductById';
import { useEffect, useContext } from 'react';
import UserCart from '../../Context/UserCart';
import UserContext from '../../Context/UserContext';
import axios from 'axios';

function ProductDetails() {
    const { id } = useParams();
    const product = GetProductById({ id });
    console.log(product);
    const { cart, setCart } = useContext(UserCart);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Any logic that depends on id can go here
    }, [id]);

    function addProductToUserCart() {
        return `http://localhost:8765/carts`;
    }
    

    async function addProductToCart() {
        console.log("called addtocart prod");
        if (!user) return;
        const response = await axios.put(addProductToUserCart(), { userId: user.id, productId: id });
        console.log(response.data);
        setCart({ ...response.data });
        navigate(`/cart/${user.id}`);
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
                    <div className="product-img d-flex">
                        <img
                            src={product.image}
                            alt="product image"
                            id="product-img"
                        />
                    </div>

                    <div className="product-details-box d-flex flex-column">
                        <div id="productDetails">
                            {/* <!-- product details --> */}
                            <div className="product-name" id="product-name">{product.title}</div>
                            <div className="product-price fw-bold" id="product-price">{product.price}</div>
                            <div className="product-description">
                                <div className="product-description-title fw-bold">Description</div>
                                <div className="product-description-data" id="product-description-data">
                                    {product.description}
                                </div>
                            </div>
                        </div>

                        <div onClick={addProductToCart} className="product-details-action btn btn-primary text-decoration-none">Add to cart</div>
                        <a href="cart.html" id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">
                            Go to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
