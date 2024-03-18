import React, { useEffect, useState } from 'react';
import usersData from '../data/data.json'; // Import the simulated JSON data
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../data/AuthContext';
import styles from '../pages/login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const { logout } = useAuth();



  const handleLogin = () => {
    
    const user = usersData.users.find(
      (user) => user.username === username && user.password === password
    );
    
    if (user) {
      console.log('Logged in');
      navigate('/');
      login(true); 
            // setTimeout(() => {
      //   logout(true);
      //   login(false);
      //   console.log('Logged out');
      // }, 600); 

    } else {
      alert('Login failed: Invalid credentials');
    }
    window.location.reload();
  };
  

  return (
    <div className={styles.loginContainer}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
