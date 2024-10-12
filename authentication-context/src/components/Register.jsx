import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'; // Adjust the path to your AuthContext

const Register = () => {
    const { register, login, user, logout } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [authStatus, setAuthStatus] = useState('register'); // Track auth status: 'register', 'login', or 'authenticated'

    // Handle user registration
    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            setError('');
            await register(email, password); // Call the register function from AuthContext
            setAuthStatus('login'); // Move to login after successful registration
        } catch (error) {
            setError('Registration failed: ' + error.message);
        }
    };

    // Handle user login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            setAuthStatus('authenticated'); // Set status to authenticated after login
        } catch (error) {
            setError('Login failed: ' + error.message);
        }
    };

    // Handle user logout
    const handleLogout = () => {
        logout();
        setAuthStatus('login'); // Redirect to login after logout
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                {/* Conditionally render based on authStatus */}
                {authStatus === 'register' && (
                    <>
                        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                        {error && (
                            <p className="text-red-600 text-center mb-4">
                                {error}
                            </p>
                        )}
                        <form onSubmit={handleRegister} className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Password:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Confirm Password:</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                            >
                                Register
                            </button>
                        </form>
                        <p className="mt-4 text-center">
                            Already have an account?{' '}
                            <button
                                className="text-indigo-500 underline"
                                onClick={() => setAuthStatus('login')}
                            >
                                Login here
                            </button>
                        </p>
                    </>
                )}

                {authStatus === 'login' && (
                    <>
                        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                        {error && (
                            <p className="text-red-600 text-center mb-4">
                                {error}
                            </p>
                        )}
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Password:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                            >
                                Login
                            </button>
                        </form>
                        <p className="mt-4 text-center">
                            Don't have an account?{' '}
                            <button
                                className="text-indigo-500 underline"
                                onClick={() => setAuthStatus('register')}
                            >
                                Register here
                            </button>
                        </p>
                    </>
                )}

                {authStatus === 'authenticated' && user && (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Welcome, {user.email}!
                        </h2>
                        <p className="text-center">You are logged in successfully.</p>
                        <div className="btn mx-auto text-center">
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
