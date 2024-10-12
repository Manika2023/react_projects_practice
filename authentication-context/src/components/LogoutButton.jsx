import React from 'react';
import { useAuth } from '../contexts/AuthContext'

const LogoutButton = () => {
    const { logout, user } = useAuth();

    return (
        user ? <button onClick={logout}>Logout</button> : null
    );
};

export default LogoutButton;
