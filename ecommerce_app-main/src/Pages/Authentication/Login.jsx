// CSS imports
import { Link } from 'react-router-dom';
import Auth from '../../Components/Auth/Auth';
import './Auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';
import { useContext } from 'react';

import UserContext from '../../Context/UserContext';
import GetcartbyId from '../../hooks/GetcartbyId';
import UserCart from '../../Context/UserCart';


function Login() {

    const [token, setToken] = useCookies(['jwt-token']);
    const navigator=useNavigate();
    function navigatefunction(where){
        navigator(where);
    }
    const {cart,setCart}=useContext(UserCart);
   
    
    const {user,setUser}=useContext(UserContext);
    
   
    

    return (
        <div className="container">
            <div className="row">
                <h2 className="home-title text-center">
                    Welcome to Shop Cart
                </h2>
            </div>
            <div className="login-wrapper" id="loginForm">
                <h4 className="text-center">Login</h4>
                <Auth onsubmit={async (authargs)=>{
                      const response =await axios.post("http://localhost:8765/auth/login",{
                        username:authargs.username,
                        email:authargs.email,
                        password:authargs.password
                      })
                      const details=jwtDecode(response.data.token);
                      console.log("signin");
                    //   console.log(details); //details hame user id and username dega
                      
                      setUser({username:details.user, id:details.id});
                      setToken('jwt-token', response.data.token);
                    //   GetcartbyId(details.id)
                    //   setCart(cart);
                      navigatefunction("/");
                  

                     

                }}/>
                <div className="signup-btn text-center" id="showSignupBtn">
                    <Link  to="/signup">
                     Donot have an Account? Sign Up Here
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Login;