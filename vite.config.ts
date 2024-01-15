import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		emptyOutDir: true,
		outDir: '../../dist/tldraw',
	},
	plugins: [react()],
	root: 'src/tldraw',
})
