import React from 'react'
import Header from './Header'
import Footer from "./Footer"
import { Route, Switch } from 'react-router-dom'
import Cart from "./Cart"
import Features from './Features'
import { Product } from './Productpage/Product'

export default function RentoMain() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Features />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/login">
            <Features />
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <Route>
            <h1>404 PAGE NOT FOUND</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    );
}
