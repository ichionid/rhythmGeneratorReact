import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/rhythmActions';
import {Meter} from './Meter';

export const RhythmContainer = (props) => {
  console.log("***RhythmContainer***");
  console.log(props.rhythm.meters.length);
  let rows = [];
  for (let i=0; i < props.rhythm.meters.length; i++) {
    console.log(props.rhythm.meters[i]);
    rows.push(<Meter key={i} actions={actions} rhythm={props.rhythm.meters[i]}/>);
  }
  return (
    <div>
      This will be a 4/4 rhythm
      {rows}
    </div>

  );
};

RhythmContainer.propTypes = {
  rhythm: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    rhythm: state.rhythm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RhythmContainer);
