import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeNote } from '../../../store/notes';
import './Note.css';

export default function Note(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: note } = props;
  const [showOptions, setShowOptions] = useState(false);

  const handleDelete = (id) => {
    dispatch(removeNote({ id }));
  };

  return (
    <div className="note">
      <div className="note-data">
        <div className="note-title">{note.title}</div>
        <p className="note-description">{note.description}</p>
      </div>
      <div className="note-options-container block">
        <button
          type="button"
          onClick={() => setShowOptions(!showOptions)}
          className="p-1"
        >
          <i className="fa fa-ellipsis-v" />
        </button>
        {showOptions && (
          <div className="note-options">
            <button
              type="button"
              className="note-option block w-full"
              onClick={() => navigate(`/note/edit/${note.id}`)}
            >
              Edit
            </button>
            <button
              type="button"
              className="note-option block w-full"
              onClick={() => handleDelete(note.id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Note.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    date: PropTypes.string,
  }),
};

Note.defaultProps = {
  data: Object,
};
