import { createContext } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState(true);
  
  return ( 
    <Context.Provider value={products}>
        {children}
    </Context.Provider>
  )
}

export default Context;
