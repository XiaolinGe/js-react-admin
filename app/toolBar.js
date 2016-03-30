import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Navbar,Input,Button,ButtonToolbar, Grid, Row, Col, } from 'react-bootstrap';
import './toolBar.scss';
import { NEW_FORM } from './actions/actions.js';

export default class ToolBar extends React.Component {
  constructor() {
    super();
  }

  handleClick() {
    let {tabs,button,dispatch} = this.props;
    let new_tab = {text: button[0].text, actionKey: button[0].actionKey, component: button[0].component};
    dispatch({type:NEW_FORM,tab:new_tab});

  }

  render() {
    let {tabs,button}=this.props;
    return (
      <div>
      <ButtonToolbar>
      <Grid>
      <Row className="show-grid" >
      <Col  md={1} >
      <Button bsStyle="primary" className="crud" onClick={this.handleClick.bind(this)}>New</Button> {' '}
      </Col>
      <Col  md={1} >
      <Button bsStyle="primary" className="crud">Delete</Button> {' '}
      </Col>
      <Col  md={1} >
      <Button bsStyle="primary" className="crud">Edit</Button> {' '}
      </Col>
      <Col  md={1} >
      <Button bsStyle="primary" className="crud">Export</Button> {' '}
      </Col>
      <Col  md={4} >
      </Col>
      </Row>
      </Grid>
      </ButtonToolbar>
      </div>
    );
  }
};


function mapStateToProps(state) {
  let {tabs,button} = state.info;
  return {tabs,button};
}

export default connect(mapStateToProps)(ToolBar);
