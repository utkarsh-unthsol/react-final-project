import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addNote, editNote } from '../../store/notes';
import './NoteForm.css';

export default function NoteForm() {
  const { id, action } = useParams();
  const notes = useSelector((store) => store.entities.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const note = action === 'add' && id === 'new'
    ? { title: '', description: '', date: '' }
    : notes.find((_note) => _note.id === Number(id));

  const [data, setData] = useState(note);
  const [error, setError] = useState({});
  if (!note) return <div>404 Not found</div>;

  const handleChange = (e) => {
    const input = e.currentTarget;
    setData({ ...data, [input.name]: input.value });
  };

  const isValidNote = () => {
    if (data.title.length <= 0) {
      setError({ title: "Title can't be empty." });
      return false;
    }

    if (Number.isNaN(new Date(data.date).getDate())) {
      setError({ date: 'Invalid date' });
      return false;
    }

    return true;
  };

  const doSubmit = (e) => {
    e.preventDefault();

    if (!isValidNote()) return;

    if (action === 'add') dispatch(addNote({ note: data }));
    else dispatch(editNote({ id: Number(id), note: data }));

    navigate('/');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="noteform-container grad-01">
      <button
        type="button"
        className="btn btn-03"
        onClick={() => navigate('..')}
      >
        <i className="fa fa-chevron-left" />
      </button>
      <form
        className="noteform"
        onSubmit={(e) => doSubmit(e)}
        onReset={(e) => handleCancel(e)}
      >
        <label htmlFor="title">
          <span className="p-2 block">Title</span>
          {error.title && (
            <span className="block noteform-error-message">{error.title}</span>
          )}
          <input
            placeholder="Title"
            className="rounded-1"
            name="title"
            onChange={(e) => handleChange(e)}
            value={data.title}
          />
        </label>
        <label htmlFor="description">
          <span className="p-2 block">Description</span>
          <textarea
            placeholder="Description"
            className="rounded-1"
            name="description"
            onChange={(e) => handleChange(e)}
            value={data.description}
            rows="10"
          />
        </label>
        <label htmlFor="date">
          <span className="p-2 block">Date </span>
          {error.date && (
            <span className="block noteform-error-message">{error.date}</span>
          )}
          <input
            className="noteform-date rounded-1"
            type="date"
            name="date"
            value={data.date}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <div className="noteform-btns">
          <button className="btn btn-01 block" type="submit">
            Save
          </button>
          <input type="reset" className="btn btn-02" />
        </div>
      </form>
    </div>
  );
}
