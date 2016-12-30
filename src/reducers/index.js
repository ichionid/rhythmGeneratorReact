// Set up your root reducer here...
import { combineReducers } from 'redux';
import rhythm from './rhythmReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  rhythm,
  routing: routerReducer
});
 export default rootReducer;
