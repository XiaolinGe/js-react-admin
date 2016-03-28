import { combineReducers } from 'redux';
import { RECEIVE_INFO, FETCH_INFO,ADD_TAB } from '../actions/actions';

const initialState = {
  treeview: [],
  tabs: [],
  defaultActiveKey: "",
  products: []
};

function info(state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO:
      state.fetching=action.context.fetching;
      return state;
    case RECEIVE_INFO:
      state = action.context.data;
      return state;
    case ADD_TAB:
      let tabs = state.tabs.concat(action.tab);
      return Object.assign({}, state, {
        defaultActiveKey: action.tab.actionKey,
        tabs:tabs
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  info
});
export default rootReducer;
