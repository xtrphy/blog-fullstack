import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            const payload = JSON.parse(atob(token.split('.')[1]));
            setIsAuthenticated(true);
            setUser({ id: payload.userId, role: payload.role });
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        const payload = JSON.parse(atob(token.split('.')[1]));
        setIsAuthenticated(true);
        setUser({ id: payload.userId, role: payload.role });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}