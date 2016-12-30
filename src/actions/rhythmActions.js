import * as types from '../constants/actionTypes';

export function toggleNoteValue(voice,noteIndex) {
  return {type: types.TOGGLE_NOTE_VALUE, voice, noteIndex};
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
