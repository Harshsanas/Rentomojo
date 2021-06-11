import React from 'react'
import styled from 'styled-components';
import rigtharrow from "../image/rightarrow.png"
import leftarrow from "../image/leftarrow.png";

const FEEDBACK = styled.div`
  #lbl1 {
    font-size: 20px;
  }
  .lbl2 {
    font-size: 18px;
    line-height: 25px;
  }
  button{
      height: 50px;
      width: 50px;
      margin-left: 10px;
      border: 1px solid grey;
      cursor: pointer;
      border-radius: 50px;
  }
  img{
      padding-top: 5px;
      opacity: 0.4;
      height: 40px;
  }
`;

export default function Feedback() {
    return (
      <div>
        <FEEDBACK>
          <label id="lbl1">Over 1.5 lac</label>
          <br />
          <label className="lbl2">happy subscribers</label>
          <hr />
          <br />
          <label className="lbl2" style={{ color: "#717171" }}>
            Here's what they have <br /> to say about their <br /> RentoMojo
            experience.{" "}
          </label>
          <br />
          <br />
          <button style={{float:"left" }}>
            <img src={leftarrow} alt="" />
          </button>
          <button >
            <img src={rigtharrow} alt="" style={{ height: "21px" }} />
          </button>
        </FEEDBACK>
      </div>
    );
}
