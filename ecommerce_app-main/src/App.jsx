import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import MainRoutes from './MainRoutes/MainRoutes';
import { useState } from 'react';
import UserContext from './Context/UserContext';
import UserCart from './Context/UserCart';
import { useContext } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [cart,setCart]=useState({})
  return (
    <UserCart.Provider value={{cart,setCart}}>
    <UserContext.Provider value={{ user, setUser }}>
      <div className='app-wrapper'>
        <Header color="light" light={true} expand="md" container="md" />
        <MainRoutes />
        <Footer />
      </div>
    </UserContext.Provider>
    </UserCart.Provider>
  );
}

export default App;
