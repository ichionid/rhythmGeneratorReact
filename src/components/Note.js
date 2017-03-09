import React, {PropTypes} from 'react';

export const Note = (props) => {
  const handleClick = () => {
    props.toggleNoteValueAction();
  };
return (
    <tr className={props.value} onClick={handleClick}>
    </tr>
  );
};

Note.propTypes = {
  value: PropTypes.bool.isRequired,
  toggleNoteValueAction: PropTypes.func
};


export default Note;
