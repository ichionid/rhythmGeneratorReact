import React from 'react';
import {connect} from 'react-redux';
import {Voice} from './Voice';

export const Meter = () => {
  return (
    <div>
      <Voice voiceType="crash"/>
      <Voice voiceType="ride"/>
      <Voice voiceType="hihat"/>
      <Voice voiceType="htom1"/>
      <Voice voiceType="htom2"/>
      <Voice voiceType="ltom"/>
      <Voice voiceType="snare"/>
      <Voice voiceType="bassdrum"/>
    </div>
  );
};

//VoiceMeter.propTypes = {
  //voiceType: PropTypes.string.isRequired,
//};


/*function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}*/

export default connect(
)(Voice);
