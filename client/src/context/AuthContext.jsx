import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const checkAuthStatus = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch('/auth-status', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await res.json();
            setLoggedIn(data.loggedIn);
        } catch {
            setLoggedIn(false);
        }
    };

    useEffect(() => {
        checkAuthStatus();
    }, [])

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, checkAuthStatus }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;