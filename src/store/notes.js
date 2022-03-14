/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
  name: 'Notes',
  initialState: [{
    id: ++lastId, title: 'Sample Note', description: 'Description for this note', date: '2022-03-09',
  }, {
    id: ++lastId, title: 'Lorem', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione asperiores suscipit officia illum ipsa quidem libero, iusto dignissimos harum.', date: '2022-03-09',
  }],
  reducers: {
    addNote: (notes, action) => {
      const { note } = action.payload;

      notes.push({
        id: ++lastId,
        title: note.title,
        description: note.description,
        date: note.date,
      });
    },
    editNote: (notes, action) => {
      const { id, note } = action.payload;
      const index = notes.findIndex((_note) => _note.id === id);
      if (!notes[index]) return;

      notes[index] = note;
    },
    removeNote: (notes, action) => {
      const { id } = action.payload;
      const index = notes.findIndex((note) => note.id === id);

      notes.splice(index, 1);
    },
  },
});

export default slice.reducer;

export const { addNote, removeNote, editNote } = slice.actions;
