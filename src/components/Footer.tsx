import React, { Component } from 'react';
import { Container, Navbar, Button, Nav, NavDropdown, Stack, Breadcrumb, Table } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    console.log(this.props);
    const title = this.props.title
    let home = "/";
    return (
      <footer>
        <Container bg="light" >
          <p id="ft_rights">Copyright © 2022 Keepdata Ltd. All Rights Reserved.</p>
        </Container>
      </footer>
    );
  }
}
