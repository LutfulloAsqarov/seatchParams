import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetail.scss";

const API_URL = "https://dummyjson.com";
const ProductDetail = () => {
    const [productData, setProductData] = useState(null);
    console.log(productData);

    let { id } = useParams();

    useEffect(() => {
        axios
            .get(`${API_URL}/products/${id}`)
            .then((res) => setProductData(res.data));
    }, []);

    return (
        <div className="detail container">
            <div className="detail__img">
                <img src={productData?.images[0]} alt="" />
            </div>
            <div className="detail__info">
                <h2>{productData?.title}</h2>
                <p className="detail__desc">{productData?.description}</p>
                <p>{productData?.price} rub</p>
            </div>
        </div>
    );
};

export default ProductDetail;
