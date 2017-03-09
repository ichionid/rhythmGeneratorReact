import React, {PropTypes} from 'react';
import {Note} from '../components/Note';

export const Voice = (props) => {

  let Notes = [];
  let key=0;
  for (let prop in props.pattern) {
    Notes.push(<Note key={key++} value={props.pattern[prop].value} toggleNoteValueAction={props.toggleNoteValueAction}/>);
}
return (
    <div>
      <table className={props.voiceType}>
      <tbody>
       <tr className="top"><td>{props.voiceType}</td></tr>
       {Notes}
      </tbody>
    </table>
    </div>
  );
};

Voice.propTypes = {
  voiceType: PropTypes.string.isRequired,
  pattern: PropTypes.array,
  toggleNoteValueAction: PropTypes.func
};



export default Voice;
