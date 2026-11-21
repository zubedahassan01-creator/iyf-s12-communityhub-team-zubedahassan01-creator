import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage.js';

function Login({ onLogin }) {
  const [name, setName] = useState(''); const navigate = useNavigate();
  function submit(event) { event.preventDefault(); if (name.trim()) { onLogin(name.trim()); navigate('/profile'); } }
  return <form onSubmit={submit}><label htmlFor="exercise-name">Demo username</label><input id="exercise-name" value={name} onChange={(event) => setName(event.target.value)} required /><button>Sign in</button></form>;
}

function Profile({ name, onLogout }) { return <section><h2>Welcome, {name}</h2><button type="button" onClick={onLogout}>Log out</button></section>; }

export default function ProtectedRouteExercise() {
  const [name, setName] = useLocalStorage('communityhub.exercise.user', '');
  return <Routes><Route path="login" element={<Login onLogin={setName} />} /><Route path="profile" element={name ? <Profile name={name} onLogout={() => setName('')} /> : <Navigate to="/login" replace />} /></Routes>;
}
