import React, { Component } from 'react';
import { Container, Navbar, Button, Nav, NavDropdown, Stack, Breadcrumb, Table } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    console.log(this.props);
    const title = this.props.title
    let home = "/";
    return (
      <header>
        <Container bg="light" >
          {/* # ナビゲーション */}
          <Navbar expand="lg">
            <Navbar.Brand href={home} id='brand'>Keepdata-EC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="products">商品一覧</Nav.Link>
                {/* <Nav.Link href="customers">顧客一覧</Nav.Link> */}
                {/* <Nav.Link href="#">顧客一覧</Nav.Link> */}
              </Nav>
              <Nav className="ms-auto">
                {/* TODO:アカウント名動的取得 */}
                <NavDropdown title="商品販売店１" id="basic-nav-dropdown">
                  {/* <NavDropdown.Item href="accounts/">登録情報確認・編集</NavDropdown.Item> */}
                  <NavDropdown.Item href="#">登録情報確認・編集</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item href="#action/3.4">ログアウト</NavDropdown.Item> */}
                  <NavDropdown.Item href="#">ログアウト</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* # パンくず */}
          <Breadcrumb>
            {/* TODO: 動的　経路反映 */}
            <Breadcrumb.Item active>商品一覧</Breadcrumb.Item>
          </Breadcrumb>
          {/* # パンくず */}
          <h1 style={{ marginBottom: '30px', fontWeight: 'bold' }}>{title}</h1>
        </Container>

      </header>
    );
  }
}
