import { useContext, useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

// CSS import
import './Header.css';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import UserContext from '../../Context/UserContext';
import UserCart from '../../Context/UserCart';
import GetcartbyId from '../../hooks/GetcartbyId';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken, removeToken] = useCookies(['jwt-token']);
  const {user,setUser}=useContext(UserContext);
  // const {cart,UserCart}=useContext(UserCart);
  console.log("inside header",user);
  
console.log(user);
  

  const toggle = () => setIsOpen(!isOpen);
  // const navigator=useNavigate();
  useEffect(() => {
    console.log(token, setToken, removeToken);
  }, [token,user]);

  console.log(user);
  const url=`cart/${user && user.id}`
 



  return (
    
    <div>
      <Navbar {...props}>
      <NavbarBrand id="title">
          <Link to="/" className="nav-link">Shop Cart</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar style={{marginRight: '2rem'}}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem><Link to={url}>cart</Link> </DropdownItem> 
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                 
                  {token['jwt-token'] ? <Link onClick={() => {
                    console.log(token);
                    removeToken('jwt-token');
                    setUser(null);
                    setCart(null);
                  }} to="/signin">Logout</Link> : <Link to="/signin">SignIn</Link>}
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {user && <NavbarText>{user.username}</NavbarText>}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;