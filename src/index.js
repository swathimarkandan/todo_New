import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './components/Index';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import MultiteamTodo from './components/MultiteamTodo';
import UniqueTodo from './components/UniqueTodo';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
      <Routes>
    <Route path="/" element={<App />} exact></Route> 
    <Route path="/index" element={<Index/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/MultiteamTodo" element={<MultiteamTodo/>}></Route>
    <Route path="/UniqueTodo" element={<UniqueTodo/>}/>
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

