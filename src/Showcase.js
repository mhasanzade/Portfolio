// import { Image, Dimensions } from 'react-native';
// import ImageZoom from 'react-native-image-pan-zoom';
import { PanZoom } from 'react-easy-panzoom';
import React, { Component } from 'react';
import { useEffect } from "react";
import { gsap, Power3 } from "gsap";
import {TweenMax, Expo, TimelineMax} from "gsap";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./css/showcase.css";
// import "./css/firstone.css";
// import "https://unpkg.com/panzoom@8.7.3/dist/panzoom.min.js";

export default function FirstOne() {
    useEffect(() => {
        document.addEventListener("mousemove", e => {
          gsap.to(".text", {
              x: e.clientX,
              y: e.clientY,
              stagger: -0.02
          });
      });

      });
    return (
     
        <div className='showcase'>
            <div className="text-effect">
        <div className='text'>MH.</div>
        <div className='text'>MH.</div>
        <div className='text'>MH.</div>
        <div className='text'>MH.</div>
        <div className='text'>
          <span className="span-show">MH.</span>
         </div>
        </div>
          <div class="header-showcase">
              Explore projects by dragging canvas
          </div>
          <div className="panzoom">
          <PanZoom
          minZoom={1}
          maxZoom={1}>
          <div class="container" id="container-showcase">
              <div class="row" id="row-showcase">
                  <div class="block block-1"></div>
                  <div class="block block-2"></div>
                  <div class="block block-3"></div>
                  <div class="block block-4"></div>
                  <div class="block block-5"></div>
                  <div class="block block-6"></div>
              </div>
              <div class="row" id="row-showcase">
                  <div class="block block-5"></div>
                  <div class="block block-6"></div>
                  <div class="block block-7"></div>
                  <div class="block block-8"></div>
                  <div class="block block-1"></div>
                  <div class="block block-2"></div>
              </div>
              <div class="row" id="row-showcase">
                  <div class="block block-1"></div>
                  <div class="block block-2"></div>
                  <div class="block block-3"></div>
                  <div class="block block-4"></div>
                  <div class="block block-5"></div>
                  <div class="block block-6"></div>
              </div>
              <div class="row" id="row-showcase">
                  <div class="block block-5"></div>
                  <div class="block block-6"></div>
                  <div class="block block-7"></div>
                  <div class="block block-8"></div>
                  <div class="block block-1"></div>
                  <div class="block block-2"></div>
              </div>
          </div>
          </PanZoom>
          </div>
        </div>
    );
  }
