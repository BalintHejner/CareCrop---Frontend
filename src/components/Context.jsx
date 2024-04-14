import { createContext } from "react";
import { useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const contextValues = {
    loggedIn,
    setLoggedIn,
    username,
    setUsername,
    token,
    setToken,
    cart,
    setCart,
    wishlist,
    setWishlist,
    categories,
    setCategories,
    products,
    setProducts,
    username,
    setUsername,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
  };

  
  return ( 
    <Context.Provider value={contextValues}>
        {children}
    </Context.Provider>
  )
}

export default Context;
