import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Tabs,Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import Table from './table';
import './treetab.scss';
// Dynamic subcomponent render
var Child = React.createClass({

  render: function() {
    return (
      <div>
      I am Child!
      </div>
    );
  }

});

export default class TreeTab extends React.Component {
  constructor() {
    super();  
  }
  componentDidMount() {
    let {tabs} = this.props;
    let {actionKey,defaultActiveKey} = tabs;
    console.log(defaultActiveKey);
  }
  render() {
    let {tabs} = this.props;
    let {actionKey} = tabs;
    
    // let panels = {
    //  "products": Table,
    // "users": Table,
    // "orders": Child
    // };
    //  let Panel = panels[defaultActiveKey];

    return (
      <Tabs defaultActiveKey={actionKey} className="treetab" >
      {tabs.map( ({text,actionKey,component},index) =>
        (<Tab eventKey={actionKey} key={index} title={text} >
        <Table/>
      </Tab>))}
      </Tabs>)}
  };


function mapStateToProps(state) {
  let {tabs} = state.info;
 
  return {tabs};
}

export default connect(mapStateToProps)(TreeTab);
