import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/chiragdas/',  // replace 'portfolio' with your GitHub repository name
  plugins: [react()],
})
