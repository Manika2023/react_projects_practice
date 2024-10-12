import React from 'react';
import { AuthProvider } from './contexts/AuthContext'; // Ensure the correct path
import Register from './components/Register'; // Ensure the correct path

const App = () => {
    return (
        <AuthProvider>
            <div>
                <h1 className='text-red-600'>Welcome to the Authentication System</h1>
                <Register />
            </div>
        </AuthProvider>
    );
};

export default App;
