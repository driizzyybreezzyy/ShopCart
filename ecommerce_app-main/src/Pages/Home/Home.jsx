
import { useContext, useEffect } from "react";
import CategoryItem from "../../Components/CategoryItem/CategoryItem";
import GetallCategories from "../../hooks/GetallCategories";
import "./Home.css"
import axios from "axios";
import UserContext from "../../Context/UserContext";
import GetcartbyId from "../../hooks/GetcartbyId";
import UserCart from "../../Context/UserCart";
function Home(){
    console.log("home");
   
    const {categorylist} =GetallCategories();
    const {user,setuser}=useContext(UserContext);
    
    // console.log(cart);
    



    useEffect(()=>{

    },[user]);
    
   
    


   
    
    return (
        <div className="container">
            <div className="row">
                <h2 className="home-title text-center">Welcome to Shop Cart</h2>
                <div className="category-list d-flex flex-row justify-content-between align-items-center" id="categoryList">

                    <CategoryItem itemName="All Products" />
                     { categorylist && categorylist.map((eachcategory)=>{
                                return <CategoryItem itemName={eachcategory} filter={eachcategory}/>
                     })}

                </div>
                <div className="category-title text-center">
                    Select a category to start Shopping
                </div>
            </div>
        </div>
    );



}
export default Home;