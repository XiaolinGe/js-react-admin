import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Navbar,Input,Button,ButtonToolbar, Grid, Row, Col, } from 'react-bootstrap';
import './toolBar.scss';
import { NEW_FORM,DELETED_FORM} from './actions/actions.js';

import './../node_modules/bootstrap-dialog/dist/css/bootstrap-dialog.css';
export default class ToolBar extends React.Component {
  constructor() {
    super();
  }

  handleClickNew() {
    let {tabs,button,dispatch} = this.props;
    let new_tab = {
      text: button[0].text,
      actionKey: button[0].actionKey,
      component: button[0].component
    };
    dispatch({type:NEW_FORM,tab:new_tab});

  }
  handleClickDelete() {
    let {selectId,products,dispatch} = this.props;
    console.log(selectId);
    if(selectId == undefined){
      BootstrapDialog.show({
        title: 'NOTIFICATION',
        message: 'Please select a product!',
        buttons: [{
          label: 'Close',
          action: function(dialogItself){
            dialogItself.close();
          }
        }]
      });


    }else{
      let newProducts = products.filter(function(e) {
        return e.id !== selectId;
      });
      selectId=undefined;
      console.log(newProducts);
    //  dispatch({type:DELETED_FORM,selectId:selectId});
    }

  }

  render() {
    let {tabs,button,products,selectId}=this.props;
    return (
      <div>
      <ButtonToolbar>
      <Grid>
      <Row className="show-grid" >
      <Col  md={1} >
      <Button bsStyle="primary" className="crud" onClick={this.handleClickNew.bind(this)}>New</Button> {' '}
      </Col>
      <Col  md={1} >
      <Button bsStyle="primary" className="crud" onClick={this.handleClickDelete.bind(this)}>Delete</Button> {' '}
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
  let {tabs,button,selectId,products} = state.info;
  return {tabs,button,selectId,products};
}

export default connect(mapStateToProps)(ToolBar);
