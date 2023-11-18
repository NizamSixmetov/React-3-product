import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from './product.module.css'
const URL = "https://dummyjson.com/products/";

const Product = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(URL).then(({ data }) => {
            setData(data.products)
        })
    }, [])
    return (
        <div className={styles.ProductDiv}>
            {
                data.map(({ id, title, price, thumbnail,discountPercentage }) => {
                    return (
                        <div key={id}>
                            <NavLink to={`/product*/${id}`} className={styles.productA}>
                                <img src={thumbnail} alt="" />
                                <h2>{title}</h2>
                                <h3 className={styles.priceP}>Price: {price} $</h3>
                                <h3><b>{discountPercentage} $</b> (Discount in the basket)</h3>
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product