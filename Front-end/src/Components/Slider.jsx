import React from 'react'
import styled from 'styled-components';
import package1 from "../image/package.jpg";
import furniture from "../image/furniture.jpg";
import appliances from "../image/appliance.jpg";
import electronic from "../image/electronic.jpg";
import fitness from "../image/fitness.jpg";
import essential from "../image/essential.jpg";
import disco from "../image/discount.jpg";
import Slideshow from './Slideshow';


const CATEGORY = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100px;
  margin-bottom: 50px;
  margin-top: 40px;
  div {
    border: 1px solid #e2eaf0;
    width: 140px;
    border-radius: 10px;
    font-size: 12px;
    text-align: center;
  }

  div > img {
    padding-top: 20px;
    width: 40px;
    text-align: center;
  }

  div:hover {
    box-shadow: 0 8px 15px 0 rgb(226, 234, 240),
      0 10px 20px 0 rgb(226, 234, 240);
    cursor: pointer;
  }
`;
export default function Slider() {
    return (
      <div>
      <Slideshow/>
        <CATEGORY>
          <div>
            <img src={package1} alt="" /><br />
            <label>Pakages</label>
          </div>
          <div>
            <img src={furniture} alt="" /><br />
            <label>Furniture</label>
          </div>
          <div>
            <img src={appliances} alt="" /><br />
            <label>Appliances</label>
          </div>
          <div>
            <img src={electronic} alt="" /><br />
            <label>Electronics</label>
          </div>
          <div>
            <img src={fitness} alt="" /><br />
            <label>Fitness</label>
          </div>
          <div>
            <img src={essential} alt="" /><br />
            <label>WFH Essentials</label>
          </div>
          <div>
            <img src={disco} alt="" /><br />
            <label>Upto 70% Off</label>
          </div>
        </CATEGORY>
      </div>
    );
}
