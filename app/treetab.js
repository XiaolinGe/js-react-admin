import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Tabs,Tab } from 'react-bootstrap';
import './treetab.scss';

export default class TreeTab extends React.Component {
  constructor() {
    super();
   
  }
  render() {
    return (
      <Tabs defaultActiveKey={3} className="treetab">
      {tab.map( ({title,id,content},index) =>
        (<Tab eventKey={index} key={index} title={title} id={id}>{content}</Tab>) )}
      </Tabs>
      )
  }
  };

let tab = [
  {title:"Tab 1", id:"tab1",  content:""},
  {title:"Tab 2", id:"tab2",  content:""},
  {title:"Tab 3", id:"tab3",  content:""},

]
