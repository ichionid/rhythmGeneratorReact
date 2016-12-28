import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Note} from '../components/Note';

export const Voice = (props) => {
let rows = [];
for (let i=0; i < 16; i++) {
    rows.push(<tr  key={i}><Note value={true}/></tr>);
}
return (
    <div>
      <table className={props.voiceType}>
      {props.voiceType}
      <tbody>
       {rows}
      </tbody>
    </table>
    </div>
  );
};

Voice.propTypes = {
  voiceType: PropTypes.string.isRequired,
};


/*function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}*/

export default connect(
)(Voice);
