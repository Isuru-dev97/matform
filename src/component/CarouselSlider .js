// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../CarouselSlider.css"; // Import the CSS file

// const CarouselSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: "0",
//   };

//   return (
//     <div className="carousel-container">
//       {" "}
//       {/* Add the container class */}
//       <Slider {...settings}>
//         <div className="carousel-slide">
//           {" "}
//           {/* Add the slide class */}
//           <img src={"assets/img/img1.jpg"} alt="Image 1" />
//         </div>
//         <div className="carousel-slide">
//           {" "}
//           {/* Add the slide class */}
//           <img src={"assets/img/img2.jpg"} alt="Image 2" />
//         </div>
//         <div className="carousel-slide">
//           {" "}
//           {/* Add the slide class */}
//           <img src={"assets/img/img3.jpg"} alt="Image 3" />
//         </div>
//         <div className="carousel-slide">
//           {" "}
//           {/* Add the slide class */}
//           <img src={"assets/img/img4.jpg"} alt="Image 4" />
//         </div>
//       </Slider>
//     </div>
//   );
// };
// export default CarouselSlider;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CarouselSlider.css";

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={"assets/img/img1.jpg"} alt="Image 1" />
        </div>
        <div className="carousel-slide">
          <img src={"assets/img/img2.jpg"} alt="Image 2" />
        </div>
        <div className="carousel-slide">
          <img src={"assets/img/img3.jpg"} alt="Image 3" />
        </div>
        <div className="carousel-slide">
          <img src={"assets/img/img4.jpg"} alt="Image 4" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSlider;
