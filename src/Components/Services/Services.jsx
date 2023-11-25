import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Services.css'; // You can create a CSS file for styling

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: 'https://www.axisbank.com/images/default-source/progress-with-us_new/home-construction-loans.jpg',
      title: 'Residential',
      description: 'Crafting dream homes with precision and care, Harsha Construction creates residential spaces that reflect comfort, style, and quality craftsmanship.',
      buttonText: 'Contact Us',
    },
    {
      id: 2,
      image: 'https://media.istockphoto.com/id/170616024/photo/concrete-highrise-construction-site.jpg?s=612x612&w=0&k=20&c=7-lJj9c_WVakkqoM6WTCNu9Q-E7bV6goRzS0NBnKsCc=',
      title: 'Commercial',
      description: 'Transforming visions into thriving business spaces, Harsha Construction specializes in constructing commercial properties that epitomize functionality and professionalism.',
      buttonText: 'Contact Us',
    },
    {
      id: 3,
      image: 'https://www.procore.com/library/wp-content/uploads/2023/05/Different-Types-of-Construction.png',
      title: 'Institutional',
      description: 'Building foundations for progress, Harsha Construction delivers top-tier institutional spaces, fostering growth and innovation within educational and public sectors.',
      buttonText: 'Contact Us',
    },
    {
        id: 3,
        image: 'https://www.shutterstock.com/shutterstock/photos/723103753/display_1500/stock-photo-aerial-photo-busy-industrial-construction-site-723103753.jpg',
        title: 'Industrial',
        description: 'Powering industrial development, Harsha Construction excels in constructing robust industrial infrastructures, supporting growth and efficiency for businesses.',
        buttonText: 'Contact Us',
      },
      {
        id: 3,
        image: 'https://static.langimg.com/thumb/msid-104817538,imgsize-115770,width-540,height-405,resizemode-75/irb-infrastructure-share-zoomed-more-than-5-percent-company-received-4428-crore-rupee-order-work-from-nhai-104817538.jpg',
        title: 'Infra work ( Road work)',
        description: 'Pioneering infrastructure development, Harsha Construction engineers roadways and infrastructure, connecting communities for seamless mobility and progress.',
        buttonText: 'Contact Us',
      },
      {
        id: 3,
        image: 'https://freerangestock.com/sample/19933/interior-construction.jpg',
        title: 'Interior work',
        description: 'Elevating interiors to reflect individuality and elegance, Harsha Construction tailors spaces with meticulous interior designs, blending functionality and aesthetics seamlessly.',
        buttonText: 'Contact Us',
      },
      
      {
        id: 3,
        image: 'https://images.jdmagicbox.com/comp/amravati/m6/9999px721.x721.200605185345.t1m6/catalogue/shree-electrical-and-plumbing-works-amravati-electricians-a5zrlthjhi.jpg',
        title: 'MEP (Electrical, plumbing,etc )',
        description: ' Providing comprehensive MEP solutions, Harsha Construction ensures efficient electrical, plumbing, and mechanical systems for seamless functionality in every project.',
        buttonText: 'Contact Us',
      },
    // Add more service objects as needed
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        swipeable={true}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={33.33}
        className="carousel-wrapper"
        autoPlay={true} // Enable autoPlay for automatic looping
        interval={3000} // Set the interval between slides in milliseconds (e.g., 3000ms = 3 seconds)
        stopOnHover={false} // Prevent stopping the autoPlay on hover (optional
      >
        {servicesData.map((service) => (
          <div key={service.id} className="service-slide">
            <img src={service.image} alt={`Service ${service.id}`} />
            <div className="service-details">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button>{service.buttonText}</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Services;
