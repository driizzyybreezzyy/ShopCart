import axios from "axios";
import { useEffect, useState } from "react";

function GetProductById({id}){

    const [product, setProduct] = useState(null);

    async function download(id){
        try {
            const response = await axios.get(`http://localhost:8765/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }

    useEffect(() => {
        if (id) {
            download(id);
        }
    }, [id]);

    return product;
}

export default GetProductById;
