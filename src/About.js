import './css/about.css';
import { TweenMax, Expo, TimelineMax } from "gsap";
import { useEffect } from "react";
import React, { Component } from 'react';
import $ from 'jquery';
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
} from "react-router-dom";

export default function About() {
      useEffect(() => {
            TweenMax.from(".left-col", 2, {
                  width: "0%",
                  // delay: 2.2,
                  // y:20,
                  // opacity:0,
                  ease: Expo.easeInOut
            })

            TweenMax.from(".logo", 2, {
                  delay: 2.5,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            TweenMax.from(".buy", 2, {
                  delay: 2.8,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            TweenMax.from(".year", 2, {
                  delay: 3.1,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            TweenMax.from(".album-name", 2, {
                  delay: 2.4,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            TweenMax.from(".album-artist", 2, {
                  delay: 2.6,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            TweenMax.from(".about h1", 2, {
                  delay: 3,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            TweenMax.from(".album-name2", 2, {
                  delay: 3.2,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            TweenMax.from(".album-artist2", 2, {
                  delay: 3.4,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            TweenMax.from(".album-genre2", 2, {
                  delay: 3.6,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            TweenMax.from(".media p", 2, {
                  delay: 3.6,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            TweenMax.staggerFrom(".media ul li", 2, {
                  delay: 3.8,
                  opacity: 0,
                  y: 20,
                  ease: Expo.easeInOut
            }, 0.1);


            TweenMax.from(".album-name3", 2, {
                  delay: 4,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            TweenMax.from(".album-artist3", 2, {
                  delay: 4.2,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            TweenMax.from(".next", 2, {
                  delay: 4.4,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            TweenMax.from(".more", 2, {
                  delay: 4.6,
                  y: 20,
                  opacity: 0,
                  ease: Expo.easeInOut
            })

            var cursor = $(".cursor"),
                  follower = $(".cursor-follower");

            var posX = 0,
                  posY = 0,
                  mouseX = 0,
                  mouseY = 0;

            TweenMax.to({}, 0.016, {
                  repeat: -1,
                  onRepeat: function () {
                        posX += (mouseX - posX) / 9;
                        posY += (mouseY - posY) / 9;

                        TweenMax.set(follower, {
                              css: {
                                    left: posX - 20,
                                    top: posY - 20
                              }
                        });

                        TweenMax.set(cursor, {
                              css: {
                                    left: mouseX,
                                    top: mouseY
                              }
                        });
                  }
            });

            $(document).on("mousemove", function (e) {
                  mouseX = e.pageX;
                  mouseY = e.pageY;
            });
      });

      return (
            <div class="container1">
                  <div class="cursor"></div>
                  <div class="cursor-follower"></div>

                  <div class="left-col">

                        <div class="logo">Madina Hasanzade</div>

                        <div class="year">Since 2021</div>

                        <div class="cover">
                              
                        </div>

                        <div class="data">

                              <div class="album-name">
                                    <p id="name">Web developer</p>
                              </div>

                              <div class="album-artist">
                                    <p id="artist">Based in BAKU</p>
                              </div>

                        </div>

                        <div class="block-cover"></div>

                        <div class="buy">
                              <Link to="/Portfolio">
                                    <p id="more">Portfolio</p>
                              </Link>
                        </div>

                  </div>

                  <div class="right-col">

                        <div class="upper">

                              <div class="about">

                                    <h1>Why me?</h1>
                                    <div class="album-name2">
                                          <p><ion-icon name="checkmark"></ion-icon> &nbsp;<span>Good at multi-tasking</span></p>
                                    </div>

                                    <div class="album-artist2">
                                          <p><ion-icon name="person"></ion-icon>  &nbsp;<span>Strong interpersonal skills</span></p>
                                    </div>

                                    <div class="album-genre2">
                                          <p><ion-icon name="flash"></ion-icon>  &nbsp;<span>Kind work ethic</span></p>
                                    </div>
                              </div>

                        </div>
                        <div class="upper-block"></div>

                        <div class="bottom">
                              <div class="next">
                                    <ion-icon name="fastforward"></ion-icon>
                              </div>

                              <div class="data2">

                                    <div class="album-name3">
                                          <p id="names">Think about it</p>
                                    </div>

                                    <div class="album-artist3">
                                          <p id="artist">Longevity</p>
                                    </div>

                              </div>


                              <div class="more">
                                    <p id="more">Contact me</p>
                              </div>

                        </div>
                        <div class="block-bottom"></div>

                  </div>

            </div>
      );
}