import reducer from './reducer';

const { configureStore } = require('@reduxjs/toolkit');

export default function configureNotesStore() {
  return configureStore({ reducer });
}
