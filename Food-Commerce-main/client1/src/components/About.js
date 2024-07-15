import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 py-10">
        <h1 className="text-3xl font-bold mb-8">About Our Website</h1>
        <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl text-center">
          <p className="mb-4">
            Welcome to our website! We are dedicated to providing you with the best service and products. Our team works tirelessly to ensure that your experience with us is nothing short of exceptional.
          </p>
          <p className="mb-4">
            Our journey began with a simple idea: to bring quality products to our customers. Over the years, we have grown and evolved, but our core values remain the same. We believe in integrity, customer satisfaction, and continuous improvement.
          </p>
          <p className="mb-4">
            Thank you for choosing us. We look forward to serving you and making your experience memorable.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
