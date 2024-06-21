import { defineConfig } from "vite";
import fs from 'fs';
import path from 'path';
import react from "@vitejs/plugin-react";

export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, '../deploy/local/u2.key')),
      cert: fs.readFileSync(path.resolve(__dirname, '../deploy/local/u2.crt'))
    }
  }
})
=======
    plugins: [react()],
    server: {
      host: true,
      strictPort: true,
      port: 3000
 }
});
>>>>>>> parent of edc6eb6 (Test https certificates)
