import { useState } from 'react';

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = () => {
    // Here you can perform your login logic, like sending a request to your server
    // For demonstration purposes, let's assume the login is successful if username and password are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Please provide a valid username and password');
    }
  };

  const logout = () => {
    // Perform logout logic, clearing any user data
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return {
    isLoggedIn,
    username,
    password,
    error,
    login,
    logout,
    handleUsernameChange,
    handlePasswordChange
  };
};

export default useLogin;
