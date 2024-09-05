import './OrderDetailProduct.css'
function OrderDetailsProduct({ image, title, price, quantity, onRemove }) {
    const quantityAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            <div className="order-details-product d-flex flex-row align-items-center p-3">
                <div className="order-details-product-img">
                    <img src={image} alt={title} />
                </div>
                <div className="order-details-product-data flex-grow-1 ms-3">
                    <div className="fw-bold">{title}</div>
                    <div>${price.toFixed(2)}</div>
                </div>
                <div className="order-details-product-actions d-flex flex-column align-items-end">
                    <div className="order-details-product-quantity mb-2">
                        <div className="fw-bold mb-1">Quantity</div>
                        <div className="form-group">
                            <select className="form-select">
                                {quantityAvailable.map((id) => (
                                    <option selected={quantity == id} value={id} key={id}>
                                        {id}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                   
                </div>
            </div>
            <hr />
        </>
    );
}

export default OrderDetailsProduct;
