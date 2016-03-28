import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Tabs,Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import Table from './table';
import './treetab.scss';


export default class TreeTab extends React.Component {
  constructor() {
    super();  
  }
  render() {
    let {tab} = this.props;
    return (
      <Tabs defaultActiveKey={3} className="treetab"  defaultActiveKey={0}>
      {tab.map( ({title,id,content},index) =>
        (<Tab eventKey={index} key={index} title={title} id={id}>{content}</Tab>) )}
      </Tabs>
      )
  }
  };


function mapStateToProps(state) {
  let {tab} = state.info;
  return {tab};
}

export default connect(mapStateToProps)(TreeTab);
