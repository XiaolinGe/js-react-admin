import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import './../node_modules/bootstrap-treeview/dist/bootstrap-treeview.min.js';
import './../node_modules/bootstrap-treeview/dist/bootstrap-treeview.min.css';
import './treeview.scss';
import { ADD_TAB } from './actions/actions.js';

export default class Tree extends React.Component {

    render() {
        let {treeview, tabs, dispatch} = this.props;
        let obj = $('#treeview');
        if(obj != undefined) {
            obj.treeview({
                data: treeview,
                levels: 5,
                color:'#428bca',
                // borderColor:'#ffffff',
                expandIcon: "glyphicon glyphicon-folder-close",
                collapseIcon: 'glyphicon glyphicon-folder-open',
                enableLinks:true,
                onNodeSelected: function(event, data) {
                    console.log(data);
                    let new_tab = {text: data.text, actionKey: data.actionKey, component: data.component};
                    dispatch({type:ADD_TAB,tab:new_tab});

                }
            });

        }
        return (
                <div>
                    <div id="treeview"></div>
                </div>
        );
    }
};

function mapStateToProps(state) {
    let {treeview,tabs} = state.info;
    return {treeview,tabs};
}

export default connect(mapStateToProps)(Tree);
