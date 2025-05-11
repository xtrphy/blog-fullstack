import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import AllPosts from './pages/AllPosts.jsx';
import PostPage from './pages/PostPage.jsx';
import LogIn from '../../client/src/components/LogIn/LogIn.jsx';
import { AuthProvider } from '../../client/src/context/AuthContext.jsx';
import './index.css';
import Register from '../../client/src/components/Register/Register.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/posts',
        element: <AllPosts />
    },
    {
        path: '/post/:id',
        element: <PostPage />
    },
    {
        path: '/login',
        element: <LogIn />,
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
)
