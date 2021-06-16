import React from 'react'
import {CheckCircleFilled, MinusOutlined} from "@ant-design/icons"
import styles from "./CartNavbar.module.css"

export const CartNavbar = () => {
    return (
        <div className={styles.display}>
            <div className={styles.partOne}>
                <img src="https://www.rentomojo.com/public/images/logo.svg" alt="img"/>
            </div>
            <div className={styles.partTwo}>
                <main>
                    <CheckCircleFilled />
                    <div>Checkout</div>
                    <MinusOutlined />
                </main>
                <main>
                    <CheckCircleFilled />
                    <div>Verification</div>
                    <MinusOutlined />
                </main>
                <main>
                    <CheckCircleFilled />
                    <div>Delivery</div>
                </main>
            </div>
        </div>
    )
}
