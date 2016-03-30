import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar,Input,Button,ButtonToolbar, Grid, Row, Col, } from 'react-bootstrap';
import { connect } from 'react-redux';
import './form.scss';


export default class Form extends React.Component {
  constructor() {
    super();
  }

  render() {
    let {products} = this.props;

    return (
      <div>
      <form className="form-horizontal form" >
      <Input type="text" label="Product ID" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
      <Input type="text" label="Product Name" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
      <Input type="text" label="Product Price" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
      <Button type="submit" className="searchButton">Submit</Button>
      </form>




      </div>
    );
  }
};

function mapStateToProps(state) {
  let {products} = state.info;
  return {products};
}

export default connect(mapStateToProps)(Form);
