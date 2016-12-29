//import {TOGGLE_PLAYER_STATE,INCREASE_HOME_SCORE,DECREASE_HOME_SCORE,INCREASE_AWAY_SCORE,DECREASE_AWAY_SCORE} from '../constants/actionTypes';
// Actions to add: ADD_POINTS, EDIT_SCORE, START_TIME, STOP_TIME,
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function gameDataReducer(state = initialState.rhythm, action) {
  let newState = objectAssign({}, state);
  console.log(action.type);

  return newState;
}
