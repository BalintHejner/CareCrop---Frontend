import { useState } from "react";

const auth = () => { 
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const [isRegistered, setIsRegistered] = useState('');
  //const [isPasswordForgotten, setIsPasswordForgotten] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');


const registration = async (name, username, password, email, mobile) => {
  try {
    
  
  const res = await fetch('http://localhost:3000/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      username,
      password,
      email,
      mobile
    })
  });

  if (res.ok) {
    const data = await res.json();
    setToken("2433rter4t5t224242425trgegdg");
    setIsRegistered(true);
    setError('');
  } else {
    const error = await res.json();
    setError(error.message);
  }

} catch (error) {
    setError('A regisztráció sikertelen volt, kérjük próbálja újra!')
}
}

const login = async (username, password) => {
  try {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })

    if (res.ok) {
      const data = await res.json();
      setToken("2433rter4t5t224242425trgegdg");
      setIsLoggedIn(true);
      setError('');
    } else {
      const error = await res.json();
      setError(error.message);
    }
  } catch (error) {
    setError('A bejelentkezés sikertelen volt, kérjük próbálja újra!')
  }
  }

  return{
    isLoggedIn,
    isRegistered,
    token,
    error,
    registration,
    login
  }
}


export default auth;