import React from 'react';
import {Slide} from "react-slideshow-image";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";

const SLIDER = styled.div`
  .each-slide > div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 400px;
    border-radius: 20px;
  }

.safediv{
  background: rgb(212,224,233);
  height: 25px;
  margin-top:-20px;
  padding-top: 30px;
  text-align: center;
  font-size: 12px;
  border-radius: 0 0 20px 20px;
  color: grey;
}
`;

const slideImages = [
  "https://s.rmjo.in/HP_WP-Web.png",
  "https://s.rmjo.in/HPHome-web.png",
];

console.log(slideImages);

export default function Slideshow() {
    return (
      <div>
        <SLIDER>
          <Slide easing="ease">
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
            </div>
          </Slide>
          <div className="safediv">
            Safety precautions during COVID-19. We’re taking additional steps
            and precautionary measures to protect our community from COVID-19.
            Know more. 
          </div>
        </SLIDER>
      </div>
    );
}
