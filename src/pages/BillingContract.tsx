import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Form, Navbar, Button, Nav, NavDropdown, Stack, Breadcrumb, Table } from 'react-bootstrap';
// 
import HeaderNologin from "../components/HeaderNologin";
import Footer from "../components/Footer";
import PaymentOptions from "../components/PaymentOptions";
// 
export default class BillingContract extends Component {
  render() {
    return (
      <>
        <HeaderNologin title={this.props.title} />
        <Container id="contents">
          {/* <Card style={{ width: '18rem' }}> */}
          <Card bg="Light" className="prod_info mb-10">
            <Card.Body>
              <Card.Title className='payment_title'>商品詳細</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <Table borderless>
                <tbody>
                  <tr><th style={{ width: '6rem', verticalAlign: 'middle' }}>商品名</th><td>商品１</td></tr>
                  <tr><th>商品説明</th><td>こちらの文章部分には管理画面で登録された商品の説明文が入ります。<br />こちらの文章部分には管理画面で登録された商品の説明文が入ります。こちらの文章部分には管理画面で登録された商品の説明文が入ります。こちらの文章部分には管理画面で登録された商品の説明文が入ります。</td></tr>
                  <tr><th style={{ width: '6rem', verticalAlign: 'middle' }}>基本価格</th><td style={{ fontWeight: 'bold', fontSize: '125%' }}>¥ 12,000</td></tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card bg="Light" className="prod_options">
            <Card.Body>
              <Card.Title className='payment_title'>商品のオプション</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <PaymentOptions />
            </Card.Body>
          </Card>
        </Container>
        <Footer />
      </>
    );
  }
}
BillingContract.propTypes = {
  title: PropTypes.string.isRequired
};