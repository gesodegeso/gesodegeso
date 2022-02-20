import React, { Component } from 'react';
import { Container, Navbar, Button, Nav, NavDropdown, Stack, Breadcrumb, Table } from 'react-bootstrap';

export default class HeaderNologin extends Component {
  render() {
    console.log(this.props);
    const title = this.props.title
    let home = "/";
    return (
      <header>
        <Container bg="light" >
          {/* # ナビゲーション */}
          <Navbar expand="lg">
            <Navbar.Brand href="#" id='brand'>Keepdata-EC</Navbar.Brand>
          </Navbar>
          <h1 style={{ marginBottom: '30px', fontWeight: 'bold' }}>{title}</h1>
        </Container>

      </header>
    );
  }
}
