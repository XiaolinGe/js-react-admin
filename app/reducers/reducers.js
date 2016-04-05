import { combineReducers } from 'redux';
import { RECEIVE_INFO, FETCH_INFO,ADD_TAB,NEW_FORM,SELECT_TAB,GET_SELECTED,DELETED_FORM,NO_SELECTED } from '../actions/actions';

const initialState = {
  treeview: [],
  tabs: [],
  defaultActiveKey: "",
  products: [],
  button: []
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
    case NEW_FORM:
      tabs = state.tabs.concat(action.tab);
      return Object.assign({}, state, {
        defaultActiveKey:action.tab.actionKey,
        tabs: tabs
      });
    case SELECT_TAB:
      return Object.assign({}, state, {
        defaultActiveKey:action.actionKey
      });
    case GET_SELECTED:
      return Object.assign({}, state, {
        selectId:action.id
      });
    case NO_SELECTED:
      return Object.assign({}, state, {
        selectId: undefined
      });
  //  case DELETED_FORM:
   //   let newProducts = state.products.filter(function(e) {
   //     return e.id !== action.selectId;
   //   });
   //   return Object.assign({}, state, {
   //     products: newProducts,
   //     selectId: undefined
    //  });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  info
});
export default rootReducer;
