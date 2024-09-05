import { useContext, useEffect } from "react";
import axios from "axios";
import UserCart from "../Context/UserCart";

function GetcartbyId(userid){
    const {cart, setCart} = useContext(UserCart);

    async function download(userid) {
        try {
            const response = await axios.get(`http://localhost:8765/carts/user/${userid}`);
            console.log("fetched data", response.data);
            setCart(response.data[0]);
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    }

    useEffect(() => {
        if (userid) {
            download(userid);
        }
    }, [userid]);

    return [cart, setCart];
}

export default GetcartbyId;
