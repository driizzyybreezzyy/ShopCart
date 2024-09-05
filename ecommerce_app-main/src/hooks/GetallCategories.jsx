import { useEffect, useState } from "react";
import axios from "axios";

function  GetallCategories(){
   

    const [categorylist,setcategorylist]=useState(null);

    async function download(){
        const list=await axios.get('http://localhost:8765/products/categories').then(response=>{
            return response.data;
        })
        setcategorylist(list);
    }

    useEffect(()=>{
        download();
        //only once we need to extract this...

    },[])

    console.log(categorylist);

    return {categorylist};

} 


export default GetallCategories;