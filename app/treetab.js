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
    let {tabs,defaultActiveKey} = this.props;
    let {actionKey} = tabs;
  }
  render() {
    let {tabs,defaultActiveKey} = this.props;
    let {actionKey} = tabs;
    
    // let panels = {
    //  "products": Table,
    // "users": Table,
    // "orders": Child
    // };
    //  let Panel = panels[defaultActiveKey];

    return (
      <Tabs  className="treetab" activeKey={defaultActiveKey} >
      {tabs.map( ({text,actionKey,component},index) =>
        (<Tab eventKey={actionKey} key={index} title={text} >
        <Table/>
      </Tab>))}
      </Tabs>)}
  };


function mapStateToProps(state) {
  let {tabs,defaultActiveKey} = state.info;
 
  return {tabs,defaultActiveKey};
}

export default connect(mapStateToProps)(TreeTab);
