import { defineConfig } from "vite";
import fs from 'fs';
import path from 'path';
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
      host: true,
      strictPort: true,
      port: 3000
 }
});