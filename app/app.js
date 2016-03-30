import React from 'react';
import { connect } from 'react-redux';
//import { hashHistory } from 'react-router';
//import createHashHistory from 'history/lib/createHashHistory';
import { getInfo } from './actions/actions';

import Table from './table';
import Tree from './treeview';
import TreeTab from './treetab';
import SearchBox from './searchBox';
import ToolBar from './toolBar';
import Form from './form';


//let history = createHashHistory();


class NoMatch extends React.Component {
  render() {
    return(<div>Not Found</div>);
  }
}

export default class App extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {

    const {dispatch} = this.props;
    //dispatch 可以触发一个 action,action是一个普通的map
    // 也可以触发一个action,action是一个function.function 第一个参数是dispatch,第二个参数是state,常用来做异步数据获取。

    dispatch(getInfo());

  }

  render() {
    return (
      <div>
      <div className="head" style={{width:"100%",height:"50px",backgroundColor:"#337ab7"}}></div>
      <div className="">
      <Tree />
      <TreeTab />
      </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
