import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Revino/', // ✅ Add this line (Repo name with slashes)
});
