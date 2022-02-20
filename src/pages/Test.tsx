import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
// 
import Header from "../components/Header";
// 
export default class Test extends Component {
  render() {
    return (
      <>
        <Header title={this.props.title} />
        <Container id="contents">
          <p>TEST</p>
        </Container>
      </>
    );
  }
}
Test.propTypes = {
  title: PropTypes.string.isRequired
};