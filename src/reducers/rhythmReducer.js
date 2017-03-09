// Actions to add: ADD_POINTS, EDIT_SCORE, START_TIME, STOP_TIME,
import {TOGGLE_NOTE_VALUE} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function rhythmReducer(state = initialState.rhythm, action) {
	console.log("rhythmReducer");
  let newState = objectAssign({}, state);
  switch (action.type) {
    case TOGGLE_NOTE_VALUE:
      return newState;

    default:
      return newState;
  }
}
