import axios from "axios";
import { useEffect, useState } from "react";

function useGetallProducts(category) {
    const [getallproducts, setAllProducts] = useState([]);

    useEffect(() => {
        async function download() {
            let url = category
                ? `http://localhost:8765/products/category/${category}`
                : `http://localhost:8765/products`;
            try {
                const response = await axios.get(url);
                setAllProducts(response.data);
            } catch (error) {
                console.error("Error fetching the products", error);
            }
        }
        download();
    }, [category]);

    return { getallproducts };
}

export default useGetallProducts;
