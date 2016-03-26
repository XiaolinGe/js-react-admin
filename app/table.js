import React from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './table.scss';



function onRowSelect(row, isSelected){
  console.log(row);
  console.log("selected: " + isSelected)
}

var selectRowProp = {
  mode: "radio",
  clickToSelect: true,
  bgColor: "#acd8f9",
  onSelect: onRowSelect
};



export default class Table extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BootstrapTable data={products} pagination={true} selectRow={selectRowProp} trClassName="table_tr">
      <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataSort={true}>Product Price</TableHeaderColumn>
      </BootstrapTable>

    );
  }
};


var products = [
  {
    id: 1,
    name: "Product1",
    price: 120
  },{
    id: 2,
    name: "Product2",
    price: 80
  },{
    id: 3,
    name: "Product3",
    price: 207
  },{
    id: 4,
    name: "Product4",
    price: 100
  },{
    id: 5,
    name: "Product5",
    price: 150
  },{
    id: 6,
    name: "Product1",
    price: 160
  }, {
    id: 11,
    name: "Product1",
    price: 120
  },{
    id: 12,
    name: "Product2",
    price: 80
  },{
    id: 13,
    name: "Product3",
    price: 207
  },{
    id: 14,
    name: "Product4",
    price: 100
  },{
    id: 15,
    name: "Product5",
    price: 150
  },{
    id: 16,
    name: "Product1",
    price: 160
  },
  {
    id: 21,
    name: "Product1",
    price: 120
  },{
    id: 22,
    name: "Product2",
    price: 80
  },{
    id: 23,
    name: "Product3",
    price: 207
  },{
    id: 24,
    name: "Product4",
    price: 100
  },{
    id: 25,
    name: "Product5",
    price: 150
  },{
    id: 26,
    name: "Product1",
    price: 160
  }, {
    id: 31,
    name: "Product1",
    price: 120
  },{
    id: 32,
    name: "Product2",
    price: 80
  },{
    id: 33,
    name: "Product3",
    price: 207
  },{
    id: 34,
    name: "Product4",
    price: 100
  },{
    id: 35,
    name: "Product5",
    price: 150
  },{
    id: 36,
    name: "Product1",
    price: 160
  }
];
