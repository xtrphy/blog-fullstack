import { useEffect, useState } from 'react';
import Header from '../../client/src/components/Header/Header';
import Footer from '../../client/src/components/Footer/Footer';
import AllPosts from './pages/AllPosts';
import LogIn from '../../client/src/components/LogIn/LogIn';

function App() {
    const [isAdmin, setIsAdmin] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) return setIsAdmin(false);

        try {
            const payload = token.split('.')[1];
            const decoded = JSON.parse(atob(payload));

            console.log(decoded);

            if (decoded.role === 'ADMIN') {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        } catch (err) {
            setIsAdmin(false);
        }
    }, []);

    if (isAdmin === null) return <div>Loading...</div>;

    return isAdmin ? (
        <>
            <Header />
            <AllPosts />
            <Footer />
        </>
    ) : <LogIn />
}

export default App
