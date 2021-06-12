import React from 'react'
import { CheckCircleFilled, InfoCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from "./ProductAdd.module.css"

export const ProductAdd = ({ id, name, color, ppmfor3months, ppmfor6months,
    ppmfor12months, deposit, stock, dishcount, refundable, categId }) => {
    return (
        <div className={styles.addBox}>
            <div className={styles.proName}>{name}</div>
            <div className={styles.cond}>
                <div>How long do you want to rent this for? (Months)</div>
                <InfoCircleOutlined/>
            </div>
            <div>
                <div>
                    slider Range
                </div>
                <table>
                    <tr className={styles.firstrow}>
                        <td>
                            <main>₹{ppmfor3months}/mon</main>
                            <div className={styles.flex}>
                                <div>Monthly Rent</div>
                                <InfoCircleOutlined/>
                            </div>
                        </td>
                        <td>
                            <main>₹{deposit}</main>
                            <div className={styles.flex}>
                                <div>Monthly Rent</div>
                                <InfoCircleOutlined/>
                            </div>
                        </td>
                    </tr>
                    <tr className={styles.secondrow}>
                        <td colSpan="2">
                            <section>
                            <main>
                                <CheckCircleFilled />
                                7 Days free trail
                            </main>
                            <main>
                                <CheckCircleFilled />
                                Free relocation
                            </main>
                            <main>
                                <CheckCircleFilled />
                                Free upgrades
                            </main>
                            <Link to="/">View All</Link>
                            </section>
                        </td>
                    </tr>
                </table>
                <div>
                    <Link>
                        Compare All Tenures
                    </Link>
                </div>
                {/* <div>
                    <img src="https://image.flaticon.com/icons/png/128/2373/2373197.png" alt="img"/>
                    <div>Delivery By 15th June 2021</div>
                    <InfoCircleOutlined/>
                </div>
                <div>
                    <ShoppingCartOutlined />
                    <div>Book your plan</div>
                </div>
                <div>Special Offers</div>
                <div>
                    <img src="https://image.flaticon.com/icons/png/512/879/879757.png" alt="img"/>;
                    <div>
                        UseCode <main>HOME5</main>
                        <div>Get 5% OFF every month on a min...</div>
                        <Link to="/">Read More</Link>
                    </div>
                    <button>
                        Copy
                    </button>
                </div> */}
            </div> 

        </div>
    )
}
