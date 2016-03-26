import { combineReducers } from 'redux';
import { RECEIVE_INFO, FETCH_INFO } from '../actions/actions';

const initialState = {

  products: [],
  treeview: []
};

function info(state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO:
      state.fetching=action.context.fetching;
      return state;
    case RECEIVE_INFO:
      state = action.context.data;
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  info
});

export default rootReducer;
