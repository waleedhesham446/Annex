import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import './App.css';
import { Survey } from './pages/Survey';
import { Result } from './pages/Result';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/login' replace />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
