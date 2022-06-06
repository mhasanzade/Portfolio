import { render } from '@testing-library/react';
import React from 'react';
import { CartProvider, useCart } from 'react-use-cart';
import CardItem from './CardItem';
import data from './data';
import "./css/cards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Card = () => {
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
    const {
        isEmpty,
        totalUniqueItems,
        items, totalItems,
        cartTotal, updateItemQuantity,
        removeItem,
        emptyCart, } = useCart();

    if (isEmpty) return <div style={{ textAlign: 'center', width: '100%', height: "100vh", background: "#121212", margin: '0', fontSize: '40px', color: "white", fontWeight: '700', padding: '0' }} >
        <nav class="menu-port" style={{ background: '#121212' }}>
            <div class="menu__logo">
                <a href="">MH</a>
            </div>
            <div class="menu__items">
                <div class="menu__items-link active">
                    <a onClick={goToPreviousPath}>Projects</a>
                </div>
                <div class="menu__items-link">
                    <Link to="/Final">
                        <a href="">Shop <FontAwesomeIcon icon={faShoppingBag} />
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
        <p style={{ borderTop: '1px solid white', borderBottom: '1px solid #fff', padding: '20px 0' }}> Cart is empty </p>
    </div>

    return (
        <div className="finally">
            <selection className="py-4 container-c">
                <nav class="menu-port">
                    <div class="menu__logo">
                        <a href="">MH</a>
                    </div>
                    <div class="menu__items">
                        <div class="menu__items-link active">
                            <a onClick={goToPreviousPath}>Projects</a>
                        </div>
                        <div class="menu__items-link">
                            <Link to="/Final">
                                <a href="">Shop <FontAwesomeIcon icon={faShoppingBag} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className="row justify-content-center hepsi">
                    <div className="col-9 items">
                        <div className="trio">
                            <h2><span style={{ color: '#da9e58' }}>Checkout</span> <span> > Order Complete</span></h2>
                        </div>
                        <div className="order">
                            <h3>YOUR ORDER</h3>
                            <h4>Product</h4>

                            <table className="d-flex align-items-center justify-content-center table table-hover m-0">
                                <tbody>
                                    {items.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="td-img">
                                                    <img src={item.img} alt="err" style={{ height: '100%', width: '100%' }} />
                                                </td>
                                                <td className="td-item-name">{item.title}</td>
                                                <td className="td-item-price">${item.price}</td>
                                                <td className="td-btn">
                                                    <button className="btn btn-danger ms-2" onClick={() =>
                                                        removeItem(item.id)
                                                    }>Remove Item
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                            <div className="col-auto total-price d-flex ">
                                <h1>Total: <span> ${cartTotal} </span></h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-auto buttons mb-4 mt-2 ms-auto d-flex align-items-center justify-content-center w-100">
                        <button className="btn btn-buy m-2" onClick={() => emptyCart()}>Clear Cart</button>
                        <button className="btn btn-dark m-2" >Buy Now</button>
                    </div>
                </div>
            </selection>
        </div>

    )

}

export default Card