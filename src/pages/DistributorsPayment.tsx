import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Col, Form, Navbar, Button, Nav, NavDropdown, Stack, Breadcrumb, Table, Row } from 'react-bootstrap';
// 
import HeaderNologin from "../components/HeaderNologin";
import Footer from "../components/Footer";

export default class DistributorsPayment extends Component {
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
          <Card bg="Light" className="form_input">
            <Card.Body>
              <Card.Title className='payment_title'>商品のオプション</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <DistributorsPaymentOptions />
            </Card.Body>
          </Card>
        </Container>
        <Footer />
      </>
    );
  }
}
DistributorsPayment.propTypes = {
  title: PropTypes.string.isRequired
};


// 商品のオプション・規約

const price_base = 12000
var price_01 = 12000
var price_02 = 0
var price_03 = 0
var price_04 = 0
// export default class PaymentOptions extends Component {
function DistributorsPaymentOptions() {
  const [validated, setValidated] = useState(false);
  const [price, setPrice] = useState(12000);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      window.location.href = "https://buy.stripe.com/test_bIY9CscXX22G0q44gg";
    }

    setValidated(true);
  };


  const handleChange = (event) => {
    // console.log(event.target.id);
    switch (event.target.id) {
      case "formOption01":
        price_01 = price_base * Number(event.target.value);
        break;
      case "formOption02":
        price_02 = 1000 * Number(event.target.value);
        break;
      case "formOption03":
        price_03 = Number(event.target.value) * 1000;
        break;
      case "formOption04":
        price_04 = Number(event.target.value) * 1000;
    }
    // console.log(price_01);
    // console.log(price_02);
    // console.log(price_03);
    setPrice(() => price_01 + price_02 + price_03 + price_04)
    // const price_result = price_base + price_01 + price_02 + price_03
    // console.log(price_result);
  };


  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit} id="payment_options">
        <Form.Group as={Row} className="mb-3" controlId="formOption01">
          <Form.Label style={{ fontWeight: 'bold' }} column sm={2}>ユーザーID数</Form.Label>
          <Col sm={8}>
            <Form.Control required as="select" className='form-select' onChange={handleChange}>
              <option value="">選択してください</option>
              <option value="1">1人</option>
              <option value="2">2人</option>
              <option value="3">3人</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">こちらのオプションを選択してください。</Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formOption02">
          <Form.Label style={{ fontWeight: 'bold' }} column sm={2}>容量</Form.Label>
          <Col sm={8}>
            <Form.Control required as="select" className='form-select' onChange={handleChange}>
              <option value="">選択してください</option>
              <option value="1">1GB</option>
              <option value="2">2GB</option>
              <option value="3">3GB</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">こちらのオプションを選択してください。</Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formOption03">
          <Form.Label style={{ fontWeight: 'bold' }} column sm={2}>利用期間</Form.Label>
          <Col sm={8}>
            <Form.Control required as="select" className='form-select' onChange={handleChange}>
              <option value="">選択してください</option>
              <option value="1">1ヶ月</option>
              <option value="2">2ヶ月</option>
              <option value="3">3ヶ月</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">こちらのオプションを選択してください。</Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formOption04">
          <Form.Label style={{ fontWeight: 'bold' }} column sm={2}>購入ライセンス数</Form.Label>
          <Col sm={8}>
            <Form.Control required as="input" type="number" min="1" placeholder='入力してください' onChange={handleChange} />
            <Form.Control.Feedback type="invalid">こちらのオプションを入力してください。</Form.Control.Feedback>
          </Col>
        </Form.Group>
        <div id="total_price">
          合計金額：{price.toLocaleString()}円
        </div>
        <Card bg="Light" className="mb-3 terms_card terms_service">
          <Card.Body>
            <Card.Title className='mb-3'>規約</Card.Title>
            <Card.Subtitle>サービス利用規約</Card.Subtitle>
            <p className="terms_text">１．利用規約<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br /><br />２．利用規約<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト</p>
            <Card.Subtitle>販売店規約</Card.Subtitle>
            <p className="terms_text">１．利用規約<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br /><br />２．利用規約<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト<br />利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト利用規約例文テキスト</p>
          </Card.Body>
        </Card>

        <Form.Group as={Row} className="mb-3">
          <Col className='col-md-auto mx-auto'>
            <Button type="submit">規約に同意して購入手続き</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}
