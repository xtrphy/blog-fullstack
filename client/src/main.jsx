import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import './index.css';
import LogIn from './components/LogIn/LogIn.jsx';
import Register from './components/Register/Register.jsx';
import App from './App.jsx'
import Posts from './components/Posts/Posts.jsx';
import PostPage from './components/PostPage/PostPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'login',
        element: <LogIn />,
    },
    {
        path: 'register',
        element: <Register />,
    },
    {
        path: 'posts',
        element: <Posts />
    },
    {
        path: 'post/:id',
        element: <PostPage />
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
)
