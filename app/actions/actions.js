import $ from 'jquery';

export const RECEIVE_INFO = 'RECEIVE_INFO';
export const FETCH_INFO = 'FETCH_INFO';
export const ADD_TAB = 'ADD_TAB';

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


export function addTab(id) {
  return (dispatch, state) => {
    dispatch(add_tab(id));
  };
}
