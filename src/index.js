import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/screens/home/Home';
import './assets/styles/global.css'
import Router from './components/screens/ui/Router'
import AuthProvider from './provider/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <Router />
    </AuthProvider>

);

