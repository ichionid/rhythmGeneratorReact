import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/rhythmActions';
import {Meter} from './Meter';

export const RhythmContainer = (props) => {
  let rows = [];
  for (let i=0; i < props.rhythm.meters.length; i++) {
    rows.push(<Meter key={i} actions={actions} rhythm={props.rhythm.meters[i]}/>);
  }
  // @todo pass note id so that we can flip it
  const handleClick = () => {
    return props.store.dispatch(actions.toggleNoteValue());
  };
  return (
    <div onClick={handleClick}>
      This will be a 4/4 rhythm
      {rows}
    </div>

  );
};

RhythmContainer.propTypes = {
  rhythm: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
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
