import React from 'react';
import './banner.css';

const Banner = () => {
  const banners = [
    {
      id: 1,
      image: 'https://via.placeholder.com/800x200?text=Offer+1',
      title: 'Special Offer 1',
      description: 'Get 50% off on your first purchase!',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/800x200?text=Offer+2',
      title: 'Special Offer 2',
      description: 'Buy one get one free on selected items!',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/800x200?text=Offer+3',
      title: 'Special Offer 3',
      description: 'Free shipping on orders over $50!',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/800x200?text=Offer+2',
      title: 'Special Offer 4',
      description: 'Buy one get one free on selected items!',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/800x200?text=Offer+3',
      title: 'Special Offer 5',
      description: 'Free shipping on orders over $50!',
    }
  ];

  return (
    <div className="banners-container">
      <div className="banners">
        {banners.map((banner) => (
          <div key={banner.id} className="banner">
            <img src={banner.image} alt={banner.title} />
            <div className="banner-content">
              <h2>{banner.title}</h2>
              <p>{banner.description}</p>
              <button className="order-button">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
