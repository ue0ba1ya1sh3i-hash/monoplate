import { defineConfig } from "vite"
import path from "node:path"

// Plugins
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import babel from "@rolldown/plugin-babel"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    tanstackRouter(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
