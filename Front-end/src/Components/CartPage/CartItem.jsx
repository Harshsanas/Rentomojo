import React from 'react'
import {DeleteOutlined, InfoCircleOutlined} from "@ant-design/icons"
import styles from "./CartItem.module.css"

export const CartItem = ({name, image, deposit, stock, ppmfor3months, ppmfor6months, ppmfor12months}) => {
    return (
        <div className={styles.itemBox}>
           <div className={styles.bg}>
               <div className={styles.item}>
                    <img src={image} alt="img" />
                    <div>
                        <main>{name}</main>
                        <section>
                            <div>
                                <div>Rent</div>
                                <div>200/mon</div>
                            </div>
                            <div>
                                <div>Deposit</div>
                                <div>{deposit}</div>
                            </div>
                        </section>
                    </div>
                    <div>
                        <DeleteOutlined />
                    </div>
               </div>
               <div className={styles.quantity}>
                    <div className={styles.button}>
                        <div>-</div>
                        <div>1</div>
                        <div>+</div>
                    </div>
                    <div>
                        <select>
                            <option>12 Months</option>
                            <option>6 Months</option>
                            <option>3 Months</option>
                        </select>
                    </div>  
               </div>
           </div>
           <div className={styles.delivery}>
               <div className={styles.deliveryItem}>
                   <img src="https://www.rentomojo.com/public/images/radical-cart/icons/truck__icon.svg" alt="img" />
                   <div>Delivery by 18th Jun 2021</div>
               </div>
               <InfoCircleOutlined />
           </div>
        </div>
    )
}
