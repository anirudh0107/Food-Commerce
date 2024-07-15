import React from 'react';
import { BsChevronDown, BsCalendarEventFill } from "react-icons/bs";
import { RiComputerLine, RiMastercardLine } from "react-icons/ri";
import { IoDocumentSharp, IoDocumentsSharp } from "react-icons/io5";
import { FaShoppingCart, FaUserCircle, FaUpload, FaArrowUp, FaStar } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import reactLogo from '../images/image2.png';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userImage');
    window.location.href = '/login';
  };

  const handleImageClick = () => {
    navigate('/adminhome');
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen w-64 fixed top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <img src={reactLogo} className="h-24 w-auto cursor-pointer" alt="React logo" onClick={handleImageClick} />
      </div>

      <ul className="p-2 space-y-2">
        <li className="py-2 px-4 hover:bg-gray-700 rounded-md transition duration-200">
          <Link to="/adminhome" className="block flex items-center space-x-2">
            <RiComputerLine size={20} />
            <span>Home</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded-md transition duration-200">
          <Link to="/create-product" className="block flex items-center space-x-2">
            <RiMastercardLine size={20} />
            <span>Create New Product</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded-md transition duration-200">
          <Link to="/all-products" className="block flex items-center space-x-2">
            <IoDocumentSharp size={20} />
            <span>Our Products</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded-md transition duration-200">
          <Link to="/products" className="block flex items-center space-x-2">
            <BsCalendarEventFill size={20} />
            <span>Update Product</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded-md transition duration-200">
          <Link to="/order-request" className="block flex items-center space-x-2">
            <FaShoppingCart size={20} />
            <span>Order Request</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded-md transition duration-200">
          <Link to="/updateadmin-profile" className="block flex items-center space-x-2">
            <IoDocumentsSharp size={20} />
            <span>Update Profile</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded-md transition duration-200">
          <Link to="/user-requests" className="block flex items-center space-x-2">
            <FaUpload size={20} />
            <span>New User Request</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded-md transition duration-200">
          <Link to="/download-pdf" className="block flex items-center space-x-2">
            <FaArrowUp size={20} />
            <span>Download Pdf</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded-md transition duration-200">
          <Link to="/user-message" className="block flex items-center space-x-2">
            <FaStar size={20} />
            <span>User's Messages</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded-md transition duration-200 cursor-pointer" onClick={handleLogout}>
          <div className="block flex items-center space-x-2">
            <FaUserCircle size={20} />
            <span>Logout</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
