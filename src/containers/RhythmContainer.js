import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import * as actions from '../actions/fuelSavingsActions';
import {Meter} from './Meter';

export const RhythmContainer = () => {
  return (
    <div>
      This will be a 4/4 rhythm
      <Meter />

    </div>

  );
};

RhythmContainer.propTypes = {
  actions: PropTypes.object,
};


/*function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}*/

export default connect(
)(RhythmContainer);
