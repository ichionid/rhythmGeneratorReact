import React, {PropTypes} from 'react';
import {Voice} from './Voice';

export const Meter = (props) => {
  let meters = [];
  for (let prop in props.rhythm) {
      meters.push(<Voice key={prop} voiceType={prop} pattern={props.rhythm[prop]} toggleNoteValueAction={props.actions.toggleNoteValue}/>);
  }
  return (
    <div>
      {meters}
    </div>
  );
};
Meter.propTypes = {
  rhythm: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
export default Meter;