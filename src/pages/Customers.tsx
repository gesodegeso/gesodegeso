import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
// 
import Header from "../components/Header";
// 
export default class Customers extends Component {
  render() {
    return (
      <>
        <Header title={this.props.title} />
        <Container id="contents">
          <p>WIP: {this.props.title}</p>
        </Container>
      </>
    );
  }
}
Customers.propTypes = {
  title: PropTypes.string.isRequired
};