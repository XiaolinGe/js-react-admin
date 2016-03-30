import React from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from 'react-redux';
import './table.scss';

import SearchBox from './searchBox';
import ToolBar from './toolBar';
import { GET_SELECTED,NO_SELECTED } from './actions/actions.js';


function onRowSelect(row, isSelected){
  console.log(row);
  console.log("selected: " + isSelected)
}

export default class Table extends React.Component {
  constructor() {
    super();
  }

  render() {
    let {products,dispatch} = this.props;
    let selectRowProp = {
      mode: "radio",
      clickToSelect: true,
      bgColor: "#acd8f9",
      onSelect: function(row,isSelected){
        console.log(isSelected);
        if(isSelected === true){
          dispatch({type:GET_SELECTED,id:row.id,isSelected:isSelected});
        }else {
          dispatch({type:NO_SELECTED,id:row.id,isSelected:isSelected});
        }
      }
    };



    return (
      <div>
      <SearchBox />
      <ToolBar  />
      <BootstrapTable data={products} pagination={true} selectRow={selectRowProp} trClassName="table_tr">
      <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataSort={true}>Product Price</TableHeaderColumn>
      </BootstrapTable>
      </div>

    );
  }
};

function mapStateToProps(state) {
  let {products} = state.info;
  return {products};
}

export default connect(mapStateToProps)(Table);
