import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar,Input,Button,ButtonToolbar, Grid, Row, Col, } from 'react-bootstrap';
import './searchBox.scss';


export default class SearchBox extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <Navbar>
      <Navbar.Header>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Navbar.Form pullLeft className="form-horizontal">
      <Input type="text" placeholder="Search" label="Product ID" labelClassName="col-xs-5" wrapperClassName="col-xs-7"/>
      {' '}
      <Input type="text" placeholder="Search" label="Product Name" labelClassName="col-xs-5" wrapperClassName="col-xs-7"/>
      {' '}
      <Input type="text" placeholder="Search" label="Product Price" labelClassName="col-xs-5" wrapperClassName="col-xs-7"/>
      {' '}
      <Button type="submit" className="searchButton">Submit</Button>
      </Navbar.Form>
      </Navbar.Collapse>
      </Navbar>

      </div>
    );
  }
};
