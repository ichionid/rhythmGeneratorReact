import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

export const Note = (props) => {
return (
    <div className={props.value}>
    </div>
  );
};

Note.propTypes = {
  value: PropTypes.bool.isRequired,
};


/*function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}*/

export default connect(
)(Note);
