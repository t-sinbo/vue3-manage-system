import vue from '@vitejs/plugin-vue'
const path = require('path');

export default {
    
    base: './',
    plugins: [vue()],
    optimizeDeps: {
        include: ['schart.js']
    }
}