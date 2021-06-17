import React from 'react'
import { CartList } from './CartList'
import { CartNavbar } from './CartNavbar'
import { CartSummary } from './CartSummary'
import styles from "./CartPage.module.css"

export const CartPage = () => {
    
    return (
        <div className={styles.display}>
            <div>
                <CartNavbar/>
            </div>
            <div className={styles.bg}>
                <div>
                    <CartSummary/>
                </div>
                <div>
                    <CartList/>
                </div>
            </div>
        </div>
    )
}
