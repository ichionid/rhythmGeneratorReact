import React, {PropTypes} from 'react';

export const Note = (props) => {
return (
    <tr className={props.value}>
    </tr>
  );
};

Note.propTypes = {
  value: PropTypes.bool.isRequired,
};


export default Note;
