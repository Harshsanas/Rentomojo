import React from 'react'
import { CheckCircleFilled, InfoCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const ProductAdd = ({featureSpecs, image, id, name, description, color, material, dimensions, productType, bgImage, ppmfor3months, ppmfor6months,
    ppmfor12months, deposit, stock, dishcount, refundable, categId }) => {
    return (
        <div>
            <div>{name}</div>
            <div>
                <div>How long do you want to rent this for? (Months)</div>
                <InfoCircleOutlined/>
            </div>
            <div>
                <div>
                    slider Range
                </div>
                <table>
                    <tr>
                        <td>
                            <main>₹{ppmfor3months}</main>
                            <div>
                                <div>Monthly Rent</div>
                                <InfoCircleOutlined/>
                            </div>
                        </td>
                        <td>
                            <main>Refundable Deposit</main>
                            <InfoCircleOutlined/>
                        </td>
                    </tr>
                    <tr>
                        <td>
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
                        </td>
                    </tr>
                </table>
                <div>
                    <Link>
                        Compare All Tenures
                    </Link>
                </div>
                <div>
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
                </div>
            </div>

        </div>
    )
}
