import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import NavbarAdmin from './components/NavbarAdmin';

const AdminHome = () => {
  const [orderData, setOrderData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);
  const chartContainer = useRef(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/order-history');
        setOrderData(response.data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrderData();
  }, []);

  useEffect(() => {
    const chartOrders = (data) => {
      if (chartContainer.current && data.length > 0) {
        if (chartInstance) {
          chartInstance.destroy();
        }

        const months = data.map(entry => entry.month);
        const orders = data.map(entry => entry.total_orders);

        const ctx = chartContainer.current.getContext('2d');
        const newChartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: months,
            datasets: [{
              label: 'Orders per Month',
              data: orders,
              backgroundColor: 'rgba(252, 128, 25, 0.6)', // Swiggy orange
              borderColor: 'rgba(252, 128, 25, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                }
              },
              y: {
                beginAtZero: true,
                grid: {
                  display: true
                }
              }
            }
          }
        });

        setChartInstance(newChartInstance);
      }
    };

    chartOrders(orderData);

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [orderData]);

  return (
    <>
      <NavbarAdmin />
      <div className="container mx-auto px-4 mt-8">
        <h4 className="text-3xl font-bold text-orange-500 mb-4 text-center">Orders Per Month</h4>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <canvas ref={chartContainer} />
        </div>
      </div>
    </>
  );
};

export default AdminHome;
