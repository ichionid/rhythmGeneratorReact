import * as types from '../constants/actionTypes';
// example of a thunk using the redux-thunk middleware
export function saveFuelSavings() {
	console.log("222");
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.TOGGLE_NOTE_VALUE
    });
  };
}

export function toggleNoteValue() {
	console.log("111");
  return {type: types.TOGGLE_NOTE_VALUE};
}
/*export function increaseHomeScore() {
  return {type: types.INCREASE_HOME_SCORE};
}
export function decreaseHomeScore() {
  return {type: types.DECREASE_HOME_SCORE};
}
export function increaseAwayScore() {
  return {type: types.INCREASE_AWAY_SCORE};
}
export function decreaseAwayScore() {
  return {type: types.DECREASE_AWAY_SCORE};
}*/
