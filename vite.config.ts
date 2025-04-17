import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './',
  plugins: [react()],
  preview: {
    host: true,                        // listen on 0.0.0.0
    port: Number(),    // use the Render-assigned port
    allowedHosts: [
      'module-13-bbw8.onrender.com'    // add your Render hostname here
    ]
  }
});
