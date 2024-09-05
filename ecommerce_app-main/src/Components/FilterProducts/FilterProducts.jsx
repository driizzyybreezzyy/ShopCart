import { useEffect, useState } from 'react';
import './FilterProducts.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
function FilterProducts() {

    const minPriceOptions = [0, 10, 20, 50, 100, 200];
    const maxPriceOptions = [0, 10, 20, 50, 100, 200, 1000];
    const [filterproductlist,setfilterproductlist]=useState([]);


    const [minprice,setminprice]=useState(null);
    const [maxprice,setmaxprice]=useState(null)

    async function download(){
    const filterproductlist=await axios.get("http://localhost:8765/products/categories").then(response=>{
        return response.data;
    });
    setfilterproductlist(filterproductlist);
}

    useEffect(()=>{
        download();

    },[])


   
    const navigator=useNavigate();

    const handleclick =(eachcategory)=>{
        const url=`/products/?category=${eachcategory}`
       navigator(url);

       
    }
    function handlemax(t){
        setmaxprice(t);
    }
    function handlemin(t){
        setminprice(t)
    }
    function fetchfiltered(max,min){
        const f = filterproductlist.filter(product => {
            return product.price >= minprice && product.price <= maxprice;
        });
        setfilterproductlist(f);
    }

    

    return (
        <div className="product-list-sidebar d-flex flex-column">

           
           

            <div className="sidebar-title fw-bold">Categories</div>
            <div id="categoryList">
            
                {/* isko api se configure karna hai */}

                {filterproductlist && filterproductlist.map((eachcategory)=>{
                    return (
                        <a   onClick={()=>{
                            handleclick(eachcategory);
                        }}className='d-flex text-decoration-none'> {eachcategory}</a>
                    )
                })}
               
            </div>


           
        </div>
    )
}

export default FilterProducts;