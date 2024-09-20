
import React, { createContext, useContext, useEffect, useState } from 'react';
import { login as loginUser, logout as logoutUser } from '../api/authentication';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const login = async ({ email, password }) => {
        try {
            const { data: { data } } = await loginUser({
                email,
                password
            });
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', true)
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        } catch (error) {
            throw error
        }
    }
    const logout = async () => {
        try {
            const { data: { data } } = await logoutUser({
                allDeviceLogout: true
            });
            setIsAuthenticated(false);
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        } catch (error) {
            throw error
        }

    }
    useEffect(() => {
        let _isAuthenticated = !!localStorage.getItem('token');
        setIsAuthenticated(_isAuthenticated)
        localStorage.setItem('isAuthenticated', _isAuthenticated)
    }, []);
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);