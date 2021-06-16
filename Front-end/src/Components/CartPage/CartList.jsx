import React from 'react'
import {RightOutlined} from "@ant-design/icons"
import {CartItem} from "./CartItem"
import styles from "./CartList.module.css"

export const CartList = () => {
    const cart = [{name: "Rex 3_seater Sofa", image: "https://p.rmjo.in/productSquare/smr3l0tl-500x500.jpg", deposit: "1668", stock: "4", ppmfor3months: "420", ppmfor6months: "400", ppmfor12months: "380",}]
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
                    cart.map(item => (
                       <CartItem {...item}/> 
                    ))
                }
            </div>
        </div>
    )
}