import { useState } from 'react';
import './App.css';
import Login from './pages/auth/Login';
import Header from './components/Header';
import Register from './pages/auth/Register';
import Home from './pages/Home';

function App() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <Header />
            <div className="flex-1 max-w-7xl w-full bg-slate-500 flex justify-center">
                <Home />
            </div>
        </div>
    );
}

export default App;
