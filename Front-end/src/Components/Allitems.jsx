import React from "react";
import styled from "styled-components";
import rigtharrow from "../image/rightarrow.png";
import leftarrow from "../image/leftarrow.png"

const FEEDBACK = styled.div`
  padding:100px 200px 80px 200px;
  margin:20px -200px 20px -200px;
  background: rgb(245, 247, 250);

  #lbl1 {
    font-size: 20px;
  }
  .lbl2 {
    font-size: 18px;
    line-height: 25px;
  }
  button {
    height: 50px;
    width: 50px;
    margin-left: 10px;
    border: 1px solid grey;
    cursor: pointer;
    border-radius: 50px;
  }
  .arr-btn {
    padding-top: 5px;
    opacity: 0.4;
    height: 40px;
  }
`;

export default function Feedback() {
  return (
    <div>
      <FEEDBACK>
        <div className="btn-sec">
          <label id="lbl1">You'll love to</label>
          <br />
          <label className="lbl2">take these home</label>
          <button style={{ float: "right" }}>
            <img
              src={rigtharrow}
              alt=""
              style={{ height: "21px" }}
              className="arr-btn"
            />
          </button>
          <button style={{ float: "right" }}>
            <img src={leftarrow} alt="" className="arr-btn" />
          </button>
          <hr />
        </div>
      </FEEDBACK>
    </div>
  );
}
