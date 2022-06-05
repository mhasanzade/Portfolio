import React from 'react';
import { useCart } from 'react-use-cart';

const CartItem = (props) => {
    const { addItem } = useCart();
    return (
        <div>
            <div class="flip-card container__item container__item-1">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={props.img} className="item-img" />
                    </div>
                    <div class="flip-card-back">
                        <h5>{props.name}</h5>
                        <p className="none">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                        <div className="buttons-port ">
                            <a href={props.path} target="_blank" className="button-port button-port-1 line-btn">Preview</a>
                            <button className="button-port stay-updated" onClick={() => addItem(props.item)}>
                                <p>Add to card</p> 
                            </button>
                        </div>
                    </div>
                </div>
                <h1 class="container__item-title">
                    <a href="">{props.title}</a>
                    <a href="" className="item-price">{props.price} $</a>
                </h1>
            </div>
        </div>
    )
}

export default CartItem
