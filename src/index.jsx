import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import PasswordReminderPage from './pages/PasswordReminderPage';
import SupportPage from './pages/SupportPage';
import CartPage from './pages/CartPage';
import ProductViewPage from './pages/ProductViewPage';
import ProductEditPage from './pages/ProductEditPage';
import ProductUploadPage from './pages/ProductUploadPage';
import ComingSoonPage from './pages/ComingSoonPage';
import InformationChangePage from './pages/InformationChangePage';
import ThankYouPage from './pages/ThankYouPage';
import MainShopPage from './pages/MainShopPage';
import ProfilePage from './pages/ProfilePage';
import OwnProfilePage from './pages/OwnProfilePage';
import EasterEggPage from './pages/EasterEggPage';
import axios from 'axios';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/passwordreminder' element={<PasswordReminderPage/>}/>
        <Route path='/support' element={<SupportPage />}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/productview' element={<ProductViewPage/>}/> 
        <Route path='/productedit' element={<ProductEditPage/>}/>
        <Route path='/productupload' element={<ProductUploadPage/>}/>
        <Route path='/comingsoon' element={<ComingSoonPage/>}/>
        <Route path='/useredit' element={<InformationChangePage/>}/>
        <Route path='/thankyou' element={<ThankYouPage/>}/>
        <Route path='/shop' element={<MainShopPage/>}/>
        <Route path='/userprofile' element={<ProfilePage/>}/>
        <Route path='/ownprofile' element={<OwnProfilePage/>}/>
        <Route path='/easteregg' element={<EasterEggPage/>}/>
        {/* <Route path='/shop' element={<Protected Component={MainShopPage}/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

axios.defaults.baseURL = 'http://87.229.85.121/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);