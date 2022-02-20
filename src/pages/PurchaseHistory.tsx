import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Navbar, Button, Nav, NavDropdown, Stack, Breadcrumb, Table, Pagination } from 'react-bootstrap';
// 
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterInput from "../components/FilterInput";
// 
export default class PurchaseHistory extends Component {
  // TODO
  data = [
    { id: 1, name: '商品01', contractSitu: '月額利用中', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },
    { id: 2, name: '商品02', contractSitu: '月額利用停止', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },
    { id: 3, name: '商品03', contractSitu: '月額利用停止', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },
    { id: 4, name: '商品04', contractSitu: '購入済み', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },
    { id: 5, name: '商品05', contractSitu: '月額利用停止', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },
    { id: 6, name: '商品06', contractSitu: '月額利用停止', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },
    { id: 7, name: '商品07', contractSitu: '月額利用中', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },
    { id: 8, name: '商品08', contractSitu: '月額利用中', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },
    { id: 9, name: '商品09', contractSitu: '月額利用中', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },
    { id: 10, name: '商品10', contractSitu: '購入済み', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },
    { id: 11, name: '商品11', contractSitu: '購入済み', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },
    { id: 12, name: '商品12', contractSitu: '購入済み', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },
    { id: 13, name: '商品13', contractSitu: '購入済み', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },
    { id: 14, name: '月額利用中アプリケーションタイプA_サンプル_ID1000_01月額利用中アプリケーションタイプA', contractSitu: '月額利用中', bill: '1,000,000', dateOfContract: '2021-00-00T00:00:00+09:00' },

  ];
  /*MEMO:
  ID：id
  商品名：name（少し長め）
  契約状況：contractSitu
  金額：bill
  契約日時：dateOfContract
  */

  constructor(props) {
    super(props);
    this.state = {
      data: this.data,
      resultLength: this.data.length
    };
  }

  handleFilterVal(val) {
    // JavaScriptのfilter()メソッドで絞り込み、絞り込んだ配列をline変数に格納
    const line = this.data.filter((item) => (
      // idまたはnameにキーワードが含まれていればtrueを返す
      item.id.toString().indexOf(val) >= 0
      || item.name.toLowerCase().indexOf(val) >= 0
    ));
    // setStateを実行
    this.setState({
      data: line,
      resultLength: line.length
    });
  }
  // 昇順で並び替えるメソッド
  handleSortByAscend(key) {
    const line = this.state.data.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    this.setState({
      data: line
    });
  }
  // 降順で並び替えるメソッド
  handleSortByDescend(key) {
    const line = this.state.data.sort((a, b) => {
      if (a[key] < b[key]) return 1;
      if (a[key] > b[key]) return -1;
      return 0;
    });
    this.setState({
      data: line
    });
  }
  render() {

    //
    let list = this.state.data.map((data) => (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td><a href='#'>{data.name}</a></td>
        <td>{data.contractSitu}</td>
        <td>{data.bill}</td>
        <td>{data.dateOfContract}</td>
      </tr>
    ));
    return (
      <>
        <Header title={this.props.title} />
        <Container id="contents">
          <FilterInput onFilterVal={this.handleFilterVal.bind(this)} resultLength={this.state.resultLength} />
          {/* <div className='list_buttons'><Button>+ 新規商品登録</Button></div> */}
          <Table striped bordered hover>
            <thead>
              {/* TODO:編集 */}
              <tr>
                <th>ID</th>
                <th>商品名</th>
                <th>契約状況</th>
                <th>金額</th>
                <th>契約日時</th>
              </tr>
            </thead>
            <tbody>
              {list}
            </tbody>
          </Table>
          <Pagination className='list_pgnation'>
            <Pagination.First>｜＜ 最初へ</Pagination.First>
            <Pagination.Prev>＜ 前へ</Pagination.Prev>
            <Pagination.Next>次へ ＞</Pagination.Next>
            <Pagination.Last>最後へ ＞｜</Pagination.Last>
          </Pagination>

        </Container>
        <Footer />
      </>
    );
  }
}
PurchaseHistory.propTypes = {
  title: PropTypes.string.isRequired
};