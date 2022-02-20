import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Col, Form, Navbar, Button, Nav, NavDropdown, Stack, Breadcrumb, Table, Row } from 'react-bootstrap';
// 
import HeaderNologin from "../components/HeaderNologin";
import Footer from "../components/Footer";


export default class PaymentConfirm extends Component {
  render() {
    return (
      <>
        <HeaderNologin title={this.props.title} />
        <Container id="contents">
          <p className="text-success">下記の内容で商品を購入します。<br />
            確認の上、お間違いがなければ『購入確定』ボタンを押してください。</p>

          <Card bg="Light" className="prod_info mb-10">
            <Card.Body>
              <Card.Title className='payment_title'>商品詳細</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
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
              <PaymentConfirmOptions />
            </Card.Body>
          </Card>
        </Container>
        <Footer />
      </>
    )
  }
}
PaymentConfirm.propTypes = {
  title: PropTypes.string.isRequired
}

const price_base = 12000
var price_01 = 12000
var price_02 = 0
var price_03 = 0
function PaymentConfirmOptions() {

  return (
    <>
      <Container id="payment_options">
        <Row className="mb-3">
          <Col style={{ fontWeight: 'bold' }} sm={2}>
            ユーザーID数
          </Col>
          <Col sm={8}>
            2人
          </Col>
        </Row>
        <Row className="mb-3">
          <Col style={{ fontWeight: 'bold' }} sm={2}>
            容量
          </Col>
          <Col sm={8}>
            2GB
          </Col>
        </Row>
        <Row className="mb-3">
          <Col style={{ fontWeight: 'bold' }} column sm={2}>
            利用期間
          </Col>
          <Col sm={8}>
            1ヶ月
          </Col>
        </Row>
      </Container>
      <div id="total_price">
        合計金額：{price_base.toLocaleString()}円
      </div>

      <Form.Group as={Row} className='justify-content-md-center'>
        <Col md={{ span: 3, offset: 4 }}>
          <Button type="submit">修正</Button>
        </Col>
        <Col >
          <Button type="submit">購入確定</Button>
        </Col>
      </Form.Group>
    </>
  )
}