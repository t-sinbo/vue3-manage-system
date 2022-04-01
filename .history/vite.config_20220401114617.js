import vue from '@vitejs/plugin-vue'
const path = require('path');

export default {
    resolve: {
        alias:{
            '@':path.resolve(__dirname,'./src')
            '~': fileURLToPath(new URL('./', import.meta.url))
        },
    },
    base: './',
    plugins: [vue()],
    optimizeDeps: {
        include: ['schart.js']
    }
}