import './css/landingpage.css';
import "./css/menu.css";
import { gsap, Power3} from "gsap";
import {TweenMax, Expo, TimelineMax} from "gsap";
import Anime, { anime } from 'react-anime';
import { useEffect } from "react";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import $ from 'jquery';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ring from './img/ring.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFan, faHeart } from '@fortawesome/free-solid-svg-icons';
import FirstOne from './FirstOne';
import Imagehover from './Imagehover';
import Footer from './Footer';
import Showcase from './Showcase';



export default function Home() {
    useEffect(() => {
        TweenMax.to(".loading-screen", 4, {
            delay: 6.6,
            top: "-110%",
            ease: Expo.easeInOut
      });

      TweenMax.from(".logo", 3, {
            delay: 8.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".contact", 3, {
            delay: 8.5,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".options", 3, {
            delay: 8.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".bottom-text", 3, {
            delay: 8.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".copyright", 3, {
            delay: 8.9,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.staggerFrom(".media ul li", 2, {
            delay: 8.7,
            opacity: 0,
            y: 20,
            ease: Power3.easeInOut
      }, 0.1);

      TweenMax.from(".menu", 3, {
            delay: 8.8,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".p1", 3, {
            delay: 9,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".p2", 3, {
            delay: 9.2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from(".letters", 3, {
        delay: 9.2,
        opacity: 0,
        y: 50,
        ease: Expo.easeInOut
      });

      TweenMax.from("#one", 3, {
            delay: 9.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      TweenMax.from("#two", 3, {
            delay: 9.7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      });

      var t1 = new TimelineMax();

      t1.from(".ringOne", 4, {
            delay: 0.2,
            opacity: 0,
            y:270,
            ease: Expo.easeInOut
      }).from(".ringTwo", 4, {
            delay: 0.7,
            opacity: 0,
            y: 270,
            ease: Expo.easeInOut
      }, "-=5").to(".ringOne", 4, {
            delay: 0.2,
            x: 280,
            ease: Expo.easeInOut
      }).to(".ringTwo", 4, {
            delay: 0.7,
            x: 280,
            ease: Expo.easeInOut
      },"-=5");

// var textWrapper = document.querySelector('.ml7 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");


anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letters',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 9000 + 50 * i;
    }
  });

  TweenMax.from(".navxbar", 2, {
    left: "-20%",
    ease: Expo.easeInOut,
    delay: 0.4,
});

var m1 = new TimelineMax({ paused: true });

m1.to(".navx", 1.8, {
    width: "94%",
    ease: Expo.easeInOut,
});

m1.staggerTo(".navx-item a", 0.6, { top: "0px", ease: Expo.easeInOut }, 0.1, "-=0.8");

m1.reverse();
$(document).on("click", ".navx-toggle", function () {
    m1.reversed(!m1.reversed());
});

$(document).on("click", ".navx-item a", function () {
    m1.reversed(!m1.reversed());
});

    });
    // <Router>
    //     <Route path="./Imagehover" component={Imagehover}/>
    // </Router>

    return (
        <div>
        <div className="landingpage">
            <div className="container6">
                <div className="loading-screen"></div>
                    <div className="loader">

                        <div className="ringOne ring">
                            <img src={ring} alt="" />
                        </div>

                        <div className="ringTwo ring">
                            <img src={ring} alt="" />
                        </div>

                    </div>

                <div className="wrapper">
                    <div className="navxbar">
                        <div className="navx-toggle">menu</div>
                    </div>
                </div>

                <div className="container6">
                    <div className="navx">
                        <div className="navx-items">

                            <div className="navx-item">
                                <a href="">Home</a>
                                <div className="navx-item-wrapper"></div>
                            </div>

                            <div className="navx-item">
                                <Link to="/Portfolio">
                                <a href="">Portfolio</a>
                                </Link>
                                <div className="navx-item-wrapper"></div>
                            </div>

                            <div className="navx-item">
                                <Link to="/About">
                                <a href="">About</a>
                                </Link>

                                <div className="navx-item-wrapper"></div>
                            </div>

                            <div className="navx-item">
                                <Link to="/Showcase">
                                <a href="">Showcase</a>
                                </Link>
                                <div className="navx-item-wrapper"></div>
                            </div>  

                        </div>
                    </div>
                </div>






                <div className="header">

                    <h1 className="m17" id="title">
                        <span className="text-wrapper">
                            <span className="letters">Welcome!</span>
                        </span>
                    </h1>

                    <p id="tagline" className="p1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae possimus quibusdam accusantium odit unde. Obcaecati saepe sint ipsa aut at temporibus et nulla voluptate adipisci magni, tempora itaque labore voluptates.</p>
                    <br/>
                    <p id="tagline" className="p2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel repellat, neque nobis accusantium et aliquid doloribus.</p>
                    
                    <div className="buttons">
                       <Link to="/Showcase">
                        <button id="one">Explore</button>   
                        </Link>
                          <Link to="/Portfolio">
                        <button id="two"><span>Go shopping now</span></button>
                        </Link>
                    </div>

                </div>

                {/* <div className="bottom-text">
                    +0.0001dv
                </div> */}

                {/* <div className="copyright">
                    2021 by MH. All rights reserved.
                </div> */}

                <div className="media">
                    <ul>
                        <li><a target="_blank" href="https://www.facebook.com/madina.hasanzade.58"><FontAwesomeIcon icon={faFacebook} className="menu-icon"/></a></li>
                        <li><a target="_blank" href=""><FontAwesomeIcon icon={faTwitter} className="menu-icon"/></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/_mhasanzade/"><FontAwesomeIcon icon={faInstagram} className="menu-icon"/></a></li>
                        <li><a target="_blank" href=""><FontAwesomeIcon icon={faYoutube} className="menu-icon"/></a></li>
                    </ul>
                </div>

            </div>

            {/* <div className="logo">
                <FontAwesomeIcon icon={faHeart} className="logo-icon"/>Madina Hasanzade
            </div> */}

            {/* <div className="contact">GET IN TOUCH</div> */}
            {/* <div className="contact">About me</div> */}


            {/* <div className="menu"><FontAwesomeIcon icon={faBars} className="menu-icon"/></div> */}
            
        </div>
        {/* <Showcase/>/ */}
        {/* <FirstOne/> */}
        <Imagehover/>
        <Footer/>
        </div>
        
    )
    // <FirstOne/>

    // <Imagehover/>
    
  }
  

