import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
const path = require('path');

export default {
    resolve: {
        alias:{
            '@':path.resolve(__dirname,'./src'),
        },
    },
    base: './',
    plugins: [vue()],
    optimizeDeps: {
        include: ['schart.js']
    }
}