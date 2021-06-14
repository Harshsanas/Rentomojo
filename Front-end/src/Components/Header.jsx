
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import rentomojo from "../image/rentomojo.png";
import Modal from "react-modal";
import cart from "../image/cart.jpg";
import modalsvg from "../image/modalsvg1.png"
import { Search } from './searchBar/Search';

Modal.setAppElement("#root")

const HEADER = styled.div`
  height: 60px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  width: 100%;
  top: 0;
  /* float: left; */
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.2);
  z-index: 4;
  img {
    /* float: left; */
    cursor: pointer;
  }

  input {
    border-radius: 12px;
    border: 1px solid grey;
    padding: 0px 20px 0px 18px;
    width: 500px;
    height: 40px;
    background: #ffff;
  }

  #login-btn {
    color: white;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #dc3226;
    background: #dc3226;
    font-weight: 400;
    padding: 0 15px 0 15px;
  }

  #login-btn:hover {
    cursor: pointer;
    background: none;
    color: #dc3226;
  }

  #cart-btn {
    cursor: pointer;
    border: none;
    background: none;
  }

  select {
    border: none;
    cursor: pointer;
  }
`;
const style = {
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%"
  }
}

const INPUTSEC = styled.div`
  #mobile-num:hover {
    border-bottom: 2px solid black;
  }
  #mobile-num:focus {
    outline: none;
  }
`;

export default function Header() {

  const [modalIsOpen,setModalIsOpen]=useState(false)
    return (
      <>
        <HEADER>
          <div style = {style.header}>
            <Link to="/">
              <img src={rentomojo} alt="icon" width="150px" />
            </Link>
            <select name="city">
              <option value="Pune">Pune</option>
            </select>
            <Search />
            <Link to="/cart">
              <button id="cart-btn">
                <div style = {{display:"flex", alignItems:"center", height: 25, width: 60, fontSize:15}}>
                  <img
                    src={cart}
                    alt="cart"
                    style={{
                      width: "20px",
                    }}
                  />{" "}
                  Cart
                </div>
              </button>
            </Link>
            <Link to="/login">
              <button id="login-btn" onClick={() => setModalIsOpen(true)}>
                LOGIN / SIGNUP
              </button>
            </Link>
          </div>
            
        </HEADER>

        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <div className="modal1-mob">
              <img src={modalsvg} alt="img" />

              <INPUTSEC>
                <div className="modal-input">
                  <button
                    onClick={() => setModalIsOpen(false)}
                    style={{
                      float: "right",
                      border: "none",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                  >
                    X
                  </button>
                  <br />
                  <br />
                  <label>
                    Enter your number to <br /> Signup or Login
                  </label>
                  <br />
                  <br />
                  <input
                    type="text"
                    name="mob"
                    id="mobile-num"
                    placeholder="Enter your phone number*"
                    maxlength="10"
                  />
                  <button
                    style={{
                      marginTop: "200px",
                      width: "290px",
                      height: "40px",
                      padding: "10px",
                      borderRadius: "10px",
                      border: "none",
                    }}
                  >
                    Continue
                  </button>
                </div>
              </INPUTSEC>
            </div>
          </Modal>
        </div>
      </>
    );
}
