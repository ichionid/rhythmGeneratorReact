// Set up your root reducer here...
import { combineReducers } from 'redux';
import rhythmReducer from './rhythmReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  rhythmReducer,
  routing: routerReducer
});
 export default rootReducer;
