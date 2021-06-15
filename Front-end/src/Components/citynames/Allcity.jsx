import React, { useState } from 'react'

export default function Allcity() {

    const [cityNames,setCityNames]=useState([])

    const style = {
      container: {
        width: 1100,
        height: 250,
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-between",
        background: "#ffff",
        padding: 20,
        position: "fixed",
        borderRadius:"4px",
        border:"1px solid grey",
      },
      input:{
          color:"grey",
          padding: "10px",
          marginLeft:"15px",
          borderRadius: "10px",
          border: "1px solid grey",
          height: "30px",
          width: "1050px",

      }
    };
    return (
      <div style={style.container}>
        <div>
          <input
            type="text"
            style={style.input}
            placeholder="Search city here"
          />
        </div>
        <div>HELLo</div>
      </div>
    );
}
