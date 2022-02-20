import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Col, Form, Navbar, Button, Nav, NavDropdown, Stack, Breadcrumb, Table, Row } from 'react-bootstrap';
// 
import HeaderNologin from "../components/HeaderNologin";
import Footer from "../components/Footer";


export default class PurchaseDetail extends Component {
  render() {
    return (
      <>
        <HeaderNologin title={this.props.title} />
        <Container id="contents">

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
              <Card.Title className='payment_title'>購入情報</Card.Title>
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
PurchaseDetail.propTypes = {
  title: PropTypes.string.isRequired
}

const price_base = 12000
function PaymentConfirmOptions() {

  return (
    <>
      <Container id="payment_options">
        <Row className="mb-3">
          <Col style={{ fontWeight: 'bold' }} sm={2}>
            購入日時
          </Col>
          <Col sm={8}>
            2021-00-00T00:00:00+09:00
          </Col>
        </Row>
        <Row className="mb-3">
          <Col style={{ fontWeight: 'bold' }} sm={2}>
            購入金額
          </Col>
          <Col sm={8}>
            ¥{price_base.toLocaleString()}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col style={{ fontWeight: 'bold' }} sm={2}>
            決済クレジットカード
          </Col>
          <Col sm={8}>
            ●●●●●●●789
          </Col>
        </Row>
      </Container>

      <Form.Group as={Row} className='mb-3'>
        <Col className='col-md-auto mx-auto'>
          <Button type="submit">月額利用停止</Button>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='mb-3'>
        <Col className='col-md-auto mx-auto'>
          <Button type="submit">購入・契約キャンセル申請</Button>
        </Col>
      </Form.Group>
    </>
  )
}