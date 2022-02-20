import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Navbar, Button, Nav, NavDropdown, Stack, Breadcrumb, Table, Pagination } from 'react-bootstrap';
// 
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterInput from "../components/FilterInput";
// 

interface Props {
  key: string
}

interface StaticProps {
  title: string
}

type History = {
  data: []
}

interface ProductListState {
  history: History[],
  // data: []
}

export default class ProductList extends Component<Props> {
  data = [
    { id: 1, name: '商品01', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },
    { id: 2, name: '商品02', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },
    { id: 3, name: '商品03', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },
    { id: 4, name: '商品04', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },
    { id: 5, name: '商品05', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },
    { id: 6, name: '商品06', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },
    { id: 7, name: '商品07', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },
    { id: 8, name: '商品08', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },
    { id: 9, name: '商品09', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },
    { id: 10, name: '商品10', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },
    { id: 11, name: '商品11', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },
    { id: 12, name: '商品12', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },
    { id: 13, name: '商品13', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },
    { id: 14, name: '商品14', regdate: '2021-00-00T00:00:00+09:00', inquiry: '問い合わせ一覧', sales: '売上確認', salesfigures: '0', customerlist: '購入者なし' },

  ];
  /*MEMO:
  ID：id
  商品名：name
  登録日時：regdate
  問い合わせ一覧：inquiry
  売上確認：sales
  購入者数：salesfigures
  購入者一覧：customerlist
  */

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      data: this.data,
      resultLength: this.data.length
    };
  }

  handleFilterVal(val: string) {
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
  handleSortByAscend(key: number) {
    const line = this.state.data.sort((a: [], b: []) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    this.setState({
      data: line
    });
  }
  // 降順で並び替えるメソッド
  handleSortByDescend(key: number) {
    const line = this.state.data.sort((a: [], b: []) => {
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
        <td>{data.name}</td>
        <td>{data.regdate}</td>
        <td><a href='#'>{data.inquiry}</a></td>
        <td><a href='#'>{data.sales}</a></td>
        <td>{data.salesfigures}</td>
        <td>{data.customerlist}</td>
      </tr>
    ));
    return (
      <>
        <Header title={this.props.title} />
        <Container id="contents">
          <FilterInput onFilterVal={this.handleFilterVal.bind(this)} resultLength={this.state.resultLength} />
          <div className='list_buttons'><Button>+ 新規商品登録</Button></div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>商品名</th>
                <th>登録日時</th>
                <th>問い合わせ一覧</th>
                <th>売上確認</th>
                <th>購入者数</th>
                <th>購入者一覧</th>
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