import React, { useState, useEffect } from 'react';
import './home_slider.css';

const Home_Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const slides = [
    {
      id: 1,
      image: 'https://wp-uploads-eb-transdirect-com-au.s3.amazonaws.com/uploads/2019/06/mobile-shopping-shoes.jpeg' ,
      header: 'Header Title',
      description: 'This is the description for slide 1.',
    },
    {
      id: 2,
      image: 'https://dutchuncles.in/wp-content/uploads/2021/02/Tech-trends-to-rule-in-fashion-e-commerce-feature-01.jpg',
      header: 'Header',
      description: 'This is the description for slide 2.',
    },
    {
      id: 3,
      image: 'https://anchanto.com/wp-content/uploads/2022/09/Fashion-Web-Images-1.jpg',
      header: 'Header info',
      description: 'This is the description for slide 3.',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider">
       <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={`Slide ${slide.id}`} />
            <div className="slide-content">
              <h2>{slide.header}</h2>
              <p>{slide.description}</p>
              <button className="order-button">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home_Slider;
