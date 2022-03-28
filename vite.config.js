
import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist'
  },
  plugins: [svelte()]
})
  