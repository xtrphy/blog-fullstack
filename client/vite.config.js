import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api/posts': 'http://localhost:3000',
            '/api/post': 'http://localhost:3000',
            '/api/login': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false
            },
            '/api/register': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false
            },
            '/auth-status': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
                configure: (proxy) => {
                    proxy.on('proxyReq', (proxyReq) => {
                        proxyReq.setHeader('Origin', 'http://localhost:5174');
                    });
                }
            }
        }
    }
});