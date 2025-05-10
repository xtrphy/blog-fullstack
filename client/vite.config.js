import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/posts': 'http://localhost:3000',
            '/post': 'http://localhost:3000',
            '/login': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false
            },
            '/register': {
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