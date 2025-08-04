import { defineConfig } from 'vite'
import crypto from 'crypto'
if (!crypto.hash) {
  crypto.hash = (algorithm, data) => {
    const hash = crypto.createHash(algorithm)
    hash.update(data)
return hash.digest('hex')
  }
}
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
