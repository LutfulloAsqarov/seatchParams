import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import {
    Link,
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
import Model from "../model/Model";
import "./products.scss";
import cart from "../../assets/cart.svg";
const API_URL = "https://dummyjson.com";

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState(null);
    const [detailData, setDetailData] = useState(null);
    const [detailLoading, setDetailLoading] = useState(false);
    const [limitParams, setLimitParams] = useSearchParams(3);
    let id = searchParams.get("detail");
    let limit = limitParams.get("limit") || 3;

    useEffect(() => {
        axios
            .get(`${API_URL}/products`, { params: { limit } })
            .then((res) => setData(res.data.products));
    }, [limitParams]);

    useEffect(() => {
        if (id) {
            setDetailLoading(true);
            axios
                .get(`${API_URL}/products/${id}`)
                .then((res) => setDetailData(res.data))
                .finally(() => setDetailLoading(false));
        }
    }, [searchParams]);

    const closeDetailModel = useCallback(() => {
        setDetailData(null);
        setSearchParams({});
    });
    return (
        <section id="products">
            <div className="products container">
                <h2 className="products__title">Готовые наборы</h2>
                <ul className="products__category">
                    <li className="products__category__item">Свадьба</li>
                    <li className="products__category__item">Девичник</li>
                    <li className="products__category__item">День рождения </li>
                    <li className="products__category__item">8 марта</li>
                    <li className="products__category__item">23 февраля</li>
                    <li className="products__category__item">Новый год</li>
                    <li className="products__category__item">День учителя</li>
                    <li className="products__category__item">День тренера</li>
                    <li className="products__category__item">1 сентября</li>
                    <li className="products__category__item">Пасха</li>
                    <li className="products__category__item">Без печати</li>
                </ul>
                <div className="products__cards">
                    {data?.map((product) => (
                        <div key={product.id} className="products__card">
                            <div className="products__card__img">
                                <img
                                    onClick={() =>
                                        setSearchParams({ detail: product.id })
                                    }
                                    key={product.id}
                                    src={product.images[0]}
                                    width={150}
                                    alt=""
                                />
                            </div>
                            <div className="products__card__info">
                                <h3>
                                    <Link to={`/single/${product.id}`}>
                                        {product.title}
                                    </Link>
                                </h3>
                                <p className="products__card__desc">
                                    {product.description}
                                </p>
                            </div>
                            <div className="products__card__price">
                                <p>
                                    {product.price}
                                    <span> rub</span>
                                </p>
                                <button>
                                    <img src={cart} alt="" />
                                    <span>В корзину</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="see-more"
                    onClick={() =>
                        setLimitParams({
                            limit: +limit + 3,
                        })
                    }
                >
                    see more
                </button>
                {id ? (
                    <Model width={700} close={closeDetailModel}>
                        {detailLoading ? (
                            <h2>loading</h2>
                        ) : (
                            <div className="detail">
                                <div className="detail__img">
                                    <img
                                        src={detailData?.images[0]}
                                        width={300}
                                        alt=""
                                    />
                                </div>
                                <div className="detail__info">
                                    <h2>{detailData?.title}</h2>
                                    <p className="detail__desc">
                                        {detailData?.description}
                                    </p>
                                    <p>{detailData?.price}</p>
                                </div>
                            </div>
                        )}
                    </Model>
                ) : (
                    <></>
                )}
            </div>
        </section>
    );
};

export default Products;
