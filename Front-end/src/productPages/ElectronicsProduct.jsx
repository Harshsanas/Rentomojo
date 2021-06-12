import React from 'react';
import { Link } from 'react-router-dom';
import { ProductHeader } from '../Components/product/header/ProductHeader';

export function ElectronicsProduct(){
    const style = {
        marginTop: 60,
        link : {
            textDecoration: "none",
            color: "#9E9E9E"

        },
        navLink: {
            color:"#6FD3D5",
            textDecoration: "none"
        }
    }
    return (
        <div style={style}>
            <ProductHeader navig = {<><Link to ="/" style = {style.link}>Home</Link>{`${'>'}`}<Link style = {style.navLink} to ="/electronics-on-rent">Electronics</Link></>}/>
        </div>
    )
}