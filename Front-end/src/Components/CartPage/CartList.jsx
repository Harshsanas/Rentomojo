import React from 'react'
import {RightOutlined} from "@ant-design/icons"
import {CartItem} from "./CartItem"
import styles from "./CartList.module.css"
import { getUser } from '../utils/localStorage'
import axios from 'axios';
export const CartList = () => {
    const [cartData, setCartData] = React.useState([])
    const cart = [{name: "Rex 3_seater Sofa", image: "https://p.rmjo.in/productSquare/smr3l0tl-500x500.jpg", deposit: "1668", stock: "4", ppmfor3months: "420", ppmfor6months: "400", ppmfor12months: "380",}]
    React.useEffect(()=> {
        const user = getUser('user');
        axios.get(`http://localhost:8080/carts/${user.mob}`)
            .then(res=>{
                setCartData(res.data);
                console.log(res.data)
            })
            .catch(err=>console.log(err.message));
    },[])
    return (
        <div>
            <div className={styles.offer}>
                <div className={styles.image}>
                    <img src="https://www.rentomojo.com/public/images/radical-cart/icons/coupon__icon.svg" alt="img" />
                    <div>Have a coupan code?</div>
                </div>
                <div>
                <RightOutlined />
                </div>
            </div>
            <div>
                {
                    cartData.map(item => (
                       <CartItem {...item}/> 
                    ))
                }
            </div>
        </div>
    )
}
