import { defineConfig } from "vite"
import path from "node:path"

// Plugins
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import babel from "@rolldown/plugin-babel"
import tailwindcss from "@tailwindcss/vite"
import { VitePWA } from "vite-plugin-pwa"
import { sitemapPlugin } from "@corentints/tanstack-router-sitemap"

export default defineConfig({
  plugins: [
    tanstackRouter(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),

    sitemapPlugin({
      baseUrl: "https://monoplate.foscript.com",
      outputPath: "public/sitemap.xml"
    }),

    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Monoplate",
        short_name: "Monoplate",
        description: "Monoplate is a tool that makes it easy to create your project from a variety of templates.",
        theme_color: "#008235",
        background_color: "#008235",
        display: "standalone",
        orientation: "portrait",
        icons: [
          {
            src: "192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
