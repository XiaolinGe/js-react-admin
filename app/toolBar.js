import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar,Input,Button,ButtonToolbar, Grid, Row, Col, } from 'react-bootstrap';
import './toolBar.scss';


export default class ToolBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <ButtonToolbar>
      <Grid>
      <Row className="show-grid" >
      <Col  md={1} >
      <Button bsStyle="primary" className="crud">New</Button> {' '}
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
