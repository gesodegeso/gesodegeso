import React, { Component } from 'react';
import { Container, Navbar, Button, Nav, NavDropdown, Stack, Breadcrumb, Table, Row, Col } from 'react-bootstrap';

export default class FilterInput extends Component {
  _filterVal() {
    // refsを通してinput要素に入力された値を取得
    const val = this.refs.myinput.value;
    // propsを通して受け取ったonFilterVal()メソッド（handleFilterVal()メソッド）を実行
    this.props.onFilterVal(val);
  }
  render() {
    return (
      <div style={{ marginBottom: '20px' }}>
        <Row>
          <Col> <span style={{ marginRight: '8px', fontSize: '110%' }}>フィルタ：</span>
            <input
              type="text"
              ref="myinput"
              defaultValue=""
              placeholder="キーワード絞り込み"
              onKeyUp={this._filterVal.bind(this)}
            /></Col>
          <Col style={{ textAlign: "right" }}>表示結果数：{this.props.resultLength}</Col>
        </Row>
      </div >
    );
  }
}
