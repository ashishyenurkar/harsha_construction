// import React from 'react';
// import './About.css'; // Import your CSS file for styling

// const About = () => {
//   return (
//     <div className="about-container">
//       <div className="about-content">
//         <div className="text-content">
//           <h2>About Us</h2>
//           <p>
//             At <strong>Harsha Construction</strong>, we are dedicated to delivering exceptional construction solutions. Our commitment is to turn visions into reality, crafting spaces that epitomize quality, functionality, and innovation.
//           </p>
//           <h3>Our Founder</h3>
//           <p>
//             <strong>Milind Yenurkar</strong>, B.E. in Civil Engineering, leads our team. With over 4 years of experience in the construction industry, Milind excels in designing and executing projects with precision.
//           </p>
//           <p>
//             Our focus extends beyond traditional construction; we believe in building legacies and contributing positively to the communities we serve.
//           </p>
//         </div>
//         <div className="image-content">
//           {/* Placeholder for an image of Milind Yenurkar */}
//           {/* You can add an image of Milind Yenurkar here */}
//         </div>
//       </div>
//       <div className="contact-button">
//         {/* Placeholder for a "Contact Us" button */}
//         {/* You can add a Contact Us button here */}
//         <img src="https://www.shutterstock.com/image-photo/engineer-surveyor-working-theodolite-construction-260nw-621830984.jpg" alt="Owner" />
//       </div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import './About.css'; // Your CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="content">
        <h2>About Harsha Construction</h2>
        <p>
           At <strong>Harsha Construction</strong>, we are dedicated to delivering exceptional construction solutions. Our commitment is to turn visions into reality, crafting spaces that epitomize quality, functionality, and innovation.
          </p>
         <h3>Our Founder</h3>
        <p>            <strong>Milind Yenurkar</strong>, B.E. in Civil Engineering, leads our team. With over 4 years of experience in the construction industry, Milind excels in designing and executing projects with precision.          </p>
          <p>             Our focus extends beyond traditional construction; we believe in building legacies and contributing positively to the communities we serve.
           </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        {/* Your image goes here */}
        <img src="https://www.shutterstock.com/image-photo/engineer-surveyor-working-theodolite-construction-260nw-621830984.jpg" alt="Owner" />
      </div>
    </div>
  );
};

export default About;

