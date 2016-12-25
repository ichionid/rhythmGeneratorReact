import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import * as actions from '../actions/fuelSavingsActions';
//import FuelSavingsForm from '../components/FuelSavingsForm';

export const RhythmContainer = () => {
  return (
    <div>
    Gianniss
      </div>

  );
};

RhythmContainer.propTypes = {
  actions: PropTypes.object.isRequired,
};


/*function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}*/

export default connect(
)(RhythmContainer);
