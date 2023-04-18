import React from 'react'


import img1 from "../assets/projects/mango/WhatsApp Image 2023-03-21 at 10.21.14 AM (4).jpeg"
import img2 from "../assets/projects/stradivarious/WhatsApp Image 2023-03-21 at 10.19.33 AM (4).jpeg"
import img3 from "../assets/projects/aleph/WhatsApp Image 2023-03-21 at 10.20.28 AM (6).jpeg"
import img6 from "../assets/projects/sacoor blue/IMG-20230329-WA0046.jpg"
import img4 from "../assets/projects/burger king/WhatsApp Image 2023-03-27 at 2.47.51 AM (2).jpeg"
import img5 from "../assets/projects/kiko/WhatsApp Image 2023-03-27 at 4.14.24 PM (1).jpeg"

import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
        src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
        src={img3}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
        src={img6}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
        src={img4}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
        src={img5}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
