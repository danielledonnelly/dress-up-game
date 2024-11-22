import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log('Using Vite config');

export default defineConfig({
  base: '/dress-up-game/',
  plugins: [react()],
});
