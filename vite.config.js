
import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  root: './src',
  publicDir: 'assets',
  build: {
    outDir: '../dist'
  },
  base: './',
  plugins: [svelte()]
})
  
