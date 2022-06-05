import React, { Component } from 'react'
import { CartProvider } from 'react-use-cart'
import {BrowserRouter, Route, Link, Router} from 'react-router-dom';
import Card from './Cards';
import Nav from "./Nav";

export default function Finally() {
        return (
            <div>
        <BrowserRouter>
                <CartProvider>
                <Card/>        
                </CartProvider>
       </BrowserRouter>
       </div>
        )
    }

