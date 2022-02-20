import React, { Component, lazy } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, HashRouter, Routes, Router, Route } from "react-router-dom";
import { Container, Navbar, Button, Nav, NavDropdown, Stack, Breadcrumb, Table } from 'react-bootstrap';

import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Customers from "../pages/Customers";
import Payment from "../pages/Payment";
import DistributorsPayment from '../pages/DistributorsPayment';
import BillingContract from '../pages/BillingContract';
import DistributorsBillingContract from '../pages/DistributorsBillingContract';
import PaymentConfirm from '../pages/PaymentConfirm';
import PaymentResult from '../pages/PaymentResult';
import PurchaseHistory from '../pages/PurchaseHistory';
import PurchaseDetail from '../pages/PurchaseDetail';
import DistributorsProductsList from '../pages/DistributorsProductsList';
import Test from "../pages/Test";

export default class KDECRoute extends Component {
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
            <Route path="/distributorsPayment" element={<DistributorsPayment title="代理販売商品購入" />}></Route>
            <Route path="/billingContract" element={<BillingContract title="月額利用契約" />}></Route>
            <Route path="/distributorsBillingContract" element={<DistributorsBillingContract title="代理販売商品月額利用契約" />}></Route>
            <Route path="/paymentConfirm" element={<PaymentConfirm title="商品購入-確認" />}></Route>
            <Route path="/paymentResult" element={<PaymentResult title="決済結果"/>}></Route>
            <Route path="/purchaseHistory" element={<PurchaseHistory title="購入履歴"/>}></Route>
            <Route path="/purchaseDetail" element={<PurchaseDetail title="購入商品-確認"/>}></Route>
            <Route path="/distributorsProductList" element={<DistributorsProductsList title="代理販売商品一覧"/>}></Route>
            {/* <Route path="/test" element={<Test />}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}