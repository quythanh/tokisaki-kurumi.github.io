import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@layout', replacement: path.resolve(__dirname, 'src/layout') },
            { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
            { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
            { find: '~', replacement: path.resolve(__dirname, 'src') },
        ],
    },
});
