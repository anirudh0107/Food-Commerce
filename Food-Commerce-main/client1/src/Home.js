import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Body from './components/Body';
import Footer from './Footer';
import HomeBody from './components/HomeBody';

const Home = () => {
  const username = localStorage.getItem('username'); // Fetch the username from localStorage

  return (
    <>
      
      <Products />
     
      <Footer />
    
    </>
  );
};

export default Home;
