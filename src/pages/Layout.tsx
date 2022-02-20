import React, { Component, lazy } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, HashRouter, Routes, Router, Route } from "react-router-dom";
import { Container, Navbar, Button, Nav, NavDropdown, Stack, Breadcrumb, Table } from 'react-bootstrap';

import Home from "./Home";
import ProductList from "./ProductList";
import Customers from "./Customers";
import Payment from "./Payment";
// import DistributorsPayment from './DistributorsPayment';
// import BillingContract from './BillingContract';
// import DistributorsBillingContract from './DistributorsBillingContract';
import Test from "./Test";

export default class Layout extends Component {
  render() {
    let home = "hogehoge";
    return (
      <div id="wrap">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home title="Home" />}></Route>
            <Route path="/products" element={<ProductList title="商品一覧" />}></Route>
            {/* <Route path="/customers" element={<Customers title="顧客一覧" />}></Route> */}
            <Route path="/buy" element={<Payment title="商品購入" />}></Route>
            {/* <Route path="/distributorsPayment" element={<DistributorsPayment title="代理販売商品購入"/>}></Route> */}
            {/* <Route path="/billingContract" element={<BillingContract title="月額利用契約"/>}></Route> */}
            {/* <Route path="/distributorsBillingContract" element={<DistributorsBillingContract title="代理販売商品月額利用契約"/>}></Route> */}
            {/* <Route path="/test" element={<Test />}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}