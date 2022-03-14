import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Note from '../common/note/Note';
import './Notes.css';

export default function Notes() {
  const navigate = useNavigate();
  const notes = useSelector((store) => store.entities.notes);

  return (
    <section>
      <div className="notes-options">
        <button
          type="button"
          className="btn btn-03"
          onClick={() => navigate('/note/add/new')}
        >
          + new note
        </button>
      </div>
      <div>
        {notes.length ? notes.map((note) => (
          <Note key={note.title} data={note} />
        )) : <div className="notes-empty super-center">Nothing in here -_-</div>}
      </div>
    </section>
  );
}
