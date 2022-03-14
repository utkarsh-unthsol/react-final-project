import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/LoginForm/LoginForm';
import 'font-awesome/css/font-awesome.css';
import Profile from './components/Profile/Profile';
import NoteForm from './components/NoteForm/NoteForm';
import basicLayout from './layouts/basicLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={basicLayout(<Profile />)} />
          <Route path="/note/:action/:id" element={basicLayout(<NoteForm />)} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
