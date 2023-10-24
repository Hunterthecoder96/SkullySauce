import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server:{
    proxy:{
      '/sauce':{
        target:'http://localhost:6800',
        changeOrigin:true,
        secure:false,
    },
    "/merch":{
      target:"http://localhost:6800",
      changeOrigin: true,
      secure:false,
    }
  },
},
  plugins: [react()],
})
