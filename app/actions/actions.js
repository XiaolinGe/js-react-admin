import $ from 'jquery';

export const RECEIVE_INFO = 'RECEIVE_INFO';
export const FETCH_INFO = 'FETCH_INFO';
export const ADD_TAB = 'ADD_TAB';
export const NEW_FORM= 'NEW_FORM';
export const SELECT_TAB = 'SELECT_TAB';
export const GET_SELECTED = 'GET_SELECTED';
export const NO_SELECTED = 'NO_SELECTED';
export const DELETED_FORM = 'DELETED_FORM';

function receive_info(data) {
  return {
    type: RECEIVE_INFO,
    context: {
      fetching: false,
      data: data
    }
  };
}

function fetch_info(id) {
  return {
    type: FETCH_INFO,
    context: {
      fetching: true
    }
  };
}


function add_tab(data) {
  return {
    type: ADD_TAB,
    context: {
      fetching: true
    }
  };
}


export function getInfo(id) {
  return (dispatch, state) => {
    $.get("/json/info.json",function(data) {

      dispatch(receive_info(data));
    });
    dispatch(fetch_info(id));

  };
}
