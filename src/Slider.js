import React, { Component } from 'react';
import "./css/slider.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import $ from 'jquery';
import "./slick.js";
// import { render } from '@testing-library/react';


export default function SimpleSlider() {
    var sickPrimary = {
        autoplay: true,
        autoplaySpeed: 2400,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1800,
        cssEase: 'cubic-bezier(.84, 0, .08, .99)',
        asNavFor: '.text-slider',
        centerMode: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
  };
  
  var sickSecondary = {
        autoplay: true,
        autoplaySpeed: 2400,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1800,
        cssEase: 'cubic-bezier(.84, 0, .08, .99)',
        asNavFor: '.image-slider',
        prevArrow: $('.prev'),
        nextArrow: $('.next')
  };
  
  $('.image-slider').slick(sickPrimary);
  $('.text-slider').slick(sickSecondary);
  return (
      <div>
    <Slider>
      <div class="text-slider-wrapper">
            <div class="text-slider">
                  <div class="text-slide"><h1>A blessing for <br/> every skin.</h1></div>
                  <div class="text-slide"><h1>The perfect mix of <br/> old & new.</h1></div>
                  <div class="text-slide"><h1>A journey over borders <br/> & generations.</h1></div>
                  <div class="text-slide"><h1>Your are the <br/> stylist.</h1></div>
                  <div class="text-slide"><h1>To be on the <br/> forerfront.</h1></div>
            </div>
      </div>

      <div class="slider-control">
            <div class="prev"><button type="button"><ion-icon name="arrow-back"></ion-icon></button></div>
            <div class="next"><button type="button"><ion-icon name="arrow-forward"></ion-icon></button></div>
      </div>

      <div class="blocks">
            <div class="block-1"></div>
            <div class="block-2"></div>
            <div class="block-3"></div>
      </div>

      <div class="overlay"></div>

      <div class="image-slider">
            <div class="image-slide" id="one"></div>
            <div class="image-slide" id="two"></div>
            <div class="image-slide" id="three"></div>
            <div class="image-slide" id="four"></div>
            <div class="image-slide" id="five"></div>
      </div>
    </Slider>
    </div>
  );
    
}

