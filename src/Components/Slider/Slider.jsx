import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css';

const Slider = () => {
  const images = [
    {
      url: 'https://t4.ftcdn.net/jpg/00/68/63/23/360_F_68632352_kmHLwFc2rQLmnKqn6gM0bhOPqxRTx8sY.jpg',
      title: 'Crafting Excellence with Harsha Construction',
      description: 'Transforming Visions into Reality. Your Trusted Partner in Construction Excellence!',
    },
    {
      url: 'https://img.freepik.com/premium-photo/asian-two-business-man-construction-engineers-supervising-progress-construction-project-construction-site_61243-1493.jpg',
      title: 'Harsha Construction: Building Futures, Building Trust',
      description: 'Where Quality Meets Precision. Delivering Innovative Solutions for Your Projects.',
    },
    {
      url: 'https://thumbs.dreamstime.com/b/construction-site-silhouette-964422.jpg',
      title: 'Harsha Construction: Where Quality Meets Craftsmanship',
      description: 'Elevating Spaces, Enriching Lives. Your Vision, Our Expertise, Unmatched Results!',
    },
  ];

  return (
    <div className="slider-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        dynamicHeight
        emulateTouch
        swipeable
      >
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image.url} alt={`Slide ${index + 1}`} />
            <div className="legend">
              <div className="legend-content">
                <h1>{image.title}</h1>
                <p>{image.description}</p>
                <button>Contact Us</button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
