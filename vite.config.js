import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

if (process.env.NODE_ENV === 'production') {
  console.log = () => { };
  console.error = () => { };
  console.debug = () => { };
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
