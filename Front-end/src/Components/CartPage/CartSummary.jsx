import React from 'react'
import {CheckCircleFilled, LineOutlined} from "@ant-design/icons"
import styles from "./CartSummary.module.css"

export const CartSummary = () => {
    return (
        <div className={styles.summary}>
            <div className={styles.suggest}>
                <div className={styles.addon}>
                    <div>Suggested Addons</div>
                    <div className={styles.added}>
                        <CheckCircleFilled />
                        <div> 0 of 1 added </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <main><img src="https://p.rmjo.in/productSquare/bqema5lu-250x250.jpg" alt="img" /></main>
                    <div>These addons are curated to give the bes experience with the products in your cart.</div>
                    <button>Choose & Add</button>
                </div>
            </div>

            <div className={styles.order}>
                <div className={styles.orderImage}>
                    <img src="https://www.rentomojo.com/public/images/radical-cart/icons/summary__icon.svg" alt="img"/>
                    <div>Order Summary</div>
                </div>
                <div className={styles.rent}>
                    <div className={styles.rentOne}>
                        <section>Payable Now</section>
                        <main>
                            <div>Refundable Deposit</div>
                            <div>2090</div>
                        </main>
                        <main>
                            <div>Delivery Charges</div>
                            <div>0</div>
                        </main>
                    </div>
                    <div>
                        <div className={styles.rentOne}>
                            <section>Monthly Payable</section>
                            <main>
                                <div>Product Rent</div>
                                <div>0</div>
                            </main>
                            <main>
                                <div>Addons Rent</div>
                                <div>0</div>
                            </main>
                            <hr/>
                            <main>
                                <div>Total Monthly Rent</div>
                                <div>0/mo</div>
                            </main>
                            
                        </div>
                        <div className={styles.note}>
                            <img src="https://www.rentomojo.com/public/images/radical-cart/icons/calendar__icon.svg" alt="img"/>
                            <div>Not to be Paid now. Pay post usage every month.</div>
                        </div>
                    </div>
                </div>
                <div className={styles.button}>
                   <div>
                        <main>2627</main>
                        <div>Payable Now</div>
                   </div>
                   <section>Proceed</section>
                </div>
            </div>

            <LineOutlined style={{color: "rgb(191,207,220)"}} rotate={90}/>

            <div className={styles.whitebg}>
                <img src="https://www.rentomojo.com/public/images/radical-cart/icons/account__icon-inactive.svg" alt="img" />
                <div>Verify Your Phone Number</div>
            </div>

            <LineOutlined style={{color: "rgb(191,207,220)"}} rotate={90}/>

            <div className={styles.whitebg}>
                <img src="https://www.rentomojo.com/public/images/radical-cart/icons/address__icon-inactive.svg" alt="img" />
                <div>Address & payment</div>
            </div>

        </div>
    )
}
