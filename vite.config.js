import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [vue()],
    publicDir: false,
    build: {
        type: ['es', 'umd'],
        lib: {
            entry: resolve(__dirname, 'src/shepherd.js'),
            name: 'vue2-shepherd',
            fileName: 'vue2-shepherd'
        }
    },
    rollupOptions: {
        output: {
            exports: 'named'
        }
    }
})
