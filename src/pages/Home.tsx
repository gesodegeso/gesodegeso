import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
// 
import Header from "../components/Header";
//
export default class Home extends Component {

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
Home.propTypes = {
  title: PropTypes.string.isRequired
};