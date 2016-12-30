import React, {PropTypes} from 'react';
import {Voice} from './Voice';

export const Meter = (props) => {
  console.log("Meter");
  console.log(props.rhythm);
  let meters = [];
  for (let prop in props.rhythm) {
      meters.push(<Voice key={prop} voiceType={prop} pattern={props.rhythm[prop]}/>);
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
/*
      <Voice voiceType="hihat"/>
      <Voice voiceType="htom1"/>
      <Voice voiceType="htom2"/>
      <Voice voiceType="ltom"/>
      <Voice voiceType="snare"/>
      <Voice voiceType="bassdrum"/>
 */
