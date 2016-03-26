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
      <Tab eventKey={1} title="Tab 1" id="#tab1" ></Tab>
      <Tab eventKey={2} title="Tab 2"  id="#tab2" ></Tab>
      <Tab eventKey={3} title="Tab 3" id="#tab3" ></Tab>
      </Tabs>
      )
  }
  };
