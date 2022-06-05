import React, { Component } from 'react';
import { gsap, Power3} from "gsap";
import {TweenMax, Expo, TimelineMax} from "gsap";
import "./css/portfolio.css";
import HorizontalScroll from 'react-scroll-horizontal';
import { CartProvider } from 'react-use-cart';
import CardItem from './CardItem';
import data from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Finally from './Final';
import {BrowserRouter, Link, Router} from 'react-router-dom';
import Nav from "./Nav";
import { useHistory } from "react-router-dom";



export default function Portfolio() {
    var blocks = document.getElementsByClassName(".container__item");
    var container = document.getElementsByClassName(".container-port");
        return (
            <div className="home">
            
            
                <div class="wrapper-port">

                <nav class="menu-port">
                    <div class="menu__logo">
                        <Link to="/">
                        <a href="">MH</a>
                        </Link>
                    </div>
                    <div class="menu__items">
                        <div class="menu__items-link active">
                            <a href="">Projects</a>
                            </div>
                        <div class="menu__items-link">
                            <Link to="/Final">
                            <a href="">Shop <FontAwesomeIcon icon={faShoppingBag} /> 
                            </a>
                            
                            </Link>
                           </div>
                    </div>
                </nav>

                 
                <CartProvider>
                <div class="container-port">
                <HorizontalScroll 
            blocks={blocks}
            container= {container}
            isAnimated= {true}
            springEffect= {0.8}
            skewReducer={40}
            skewLimit={20}
            style={{'position':'fixed', overflow:'visible'}}>
                    <div class=" container__item-header col-lg-2 col-md-2">
                        {/* <h1>Madina Hasanzade <br/> web developer</h1> */}
                        <p class="line anim-typewriter">Madina Hasanzade</p>
                    </div>
{/*                     
                    <div class="container__item container__item-1"> */}
                    {data.productData.map((item,id)=>{
                        return(
                            <CardItem
                            img={item.img}
                            title={item.title}
                            name={item.name}
                            price={item.price}
                            // starcount={item.starcount}
                            item={item}
                            path={item.path}
                            // key={id} 
                            />
                        ) 
                    })}
                    {/* </div> */}
            </HorizontalScroll>

                </div>
                </CartProvider>
                
                </div>
           

            </div>
        )
    }

