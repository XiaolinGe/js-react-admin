import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table';
import Tree from './treeview';
import TreeTab from './treetab';
import SearchBox from './searchBox';
import ToolBar from './toolBar';


ReactDOM.render(
  <div>
  <div className="head" style={{width:"100%",height:"50px",backgroundColor:"#337ab7"}}></div>
  <div className="">
    <Tree />
  <TreeTab />
  <SearchBox />
  <ToolBar />
  <Table />
  </div>
  </div>,
  document.getElementById("app")
);







