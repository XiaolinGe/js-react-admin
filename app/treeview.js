import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './../node_modules/bootstrap-treeview/dist/bootstrap-treeview.min.js';
import './../node_modules/bootstrap-treeview/dist/bootstrap-treeview.min.css';
import './treeview.scss';


export default class Tree extends React.Component {
  constructor() {
    super();
  }
  handleClick() {
    $(".nav-tabs>li:eq(0)>a").show("500");
  }

  componentDidMount() {

  }

  render() {
    let {treeview} = this.props;
    let obj = $('#treeview');

    if(obj != undefined){
      obj.treeview({
        data: treeview,
        levels: 5,
        color:'#428bca',
        // borderColor:'#ffffff',
        expandIcon: "glyphicon glyphicon-folder-close",
        collapseIcon: 'glyphicon glyphicon-folder-open',
        enableLinks:true
      });
      $(".node-treeview:eq(1)").click(this.handleClick);
    }
    return (
      <div>
      <div id="treeview"></div>
      </div>
    );
  }

};


function mapStateToProps(state) {
  let {treeview} = state.info;

  return {treeview};
}

export default connect(mapStateToProps)(Tree);
