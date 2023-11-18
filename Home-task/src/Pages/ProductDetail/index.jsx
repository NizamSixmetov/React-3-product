import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import styles from './productDetail.module.css';

const URL = 'https://dummyjson.com/products/';
const ProductDetail = () => {
    const { id } = useParams();
    const [prod, setProd] = useState([]);
    useEffect(() => {
        axios.get(URL + id).then(({ data }) => {
            setProd(data);
        })
    }, []);
    return (
        <div className={styles.dispF} key={id}>
            <div>
                <img src={prod.thumbnail} alt="" />
                <p className={styles.oldPrice}>Old Price: {prod.price}$ <b className={styles.newPrice}>New Price: {prod.price - prod.discountPercentage}$</b></p>
                <p className={styles.newPrice}>Discount: {prod.discountPercentage}$</p>
            </div>
            <div>
                <h2>{prod.title}</h2>
                <h3>{prod.description}</h3>
                <h5>Rating: {prod.rating}</h5>
                <h5>Stock: {prod.stock}</h5>
                <h5>Brand: {prod.brand}</h5>
                <h5>Category: {prod.category}</h5>
            </div>
        </div>
    )
}

export default ProductDetail