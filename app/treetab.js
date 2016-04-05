import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Tabs,Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { SELECT_TAB } from './actions/actions.js';

import './treetab.scss';
import Table from './table';
import Form from './form';

export default class TreeTab extends React.Component {
  constructor() {
    super();
  }


  handleSelect(key) {
    let {dispatch}=this.props;
    dispatch({type:SELECT_TAB,actionKey:key});
  }

  render() {
    let {tabs,defaultActiveKey,button,dispatch} = this.props;
    
    let panels = {
      products: Table,
      users: Table,
      orders: Table,
      new: Form
      
    };
    return (
      <Tabs  className="treetab" activeKey={defaultActiveKey} onSelect={this.handleSelect.bind(this)}>
      {tabs.map( ({text,actionKey,component},index) =>{
        let Panel = panels[actionKey];          
        return  ( <Tab eventKey={actionKey} key={index} title={text} >
          <Panel/>
          </Tab>) }) }
      </Tabs>)}
};






function mapStateToProps(state) {
  let {tabs,defaultActiveKey,button} = state.info;
  
  return {tabs,defaultActiveKey,button};
}

export default connect(mapStateToProps)(TreeTab);
