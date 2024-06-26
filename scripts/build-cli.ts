import iifePlugin from './plugins/esbuild-plugin-iife'
import esbuild from 'esbuild'

await esbuild.build({
	bundle: true,
	entryPoints: ['src/cli/cli.ts'],
	external: ['express', 'puppeteer', 'yargs'],
	format: 'esm',
	minify: false,
	outfile: 'bin/cli.js',
	platform: 'node',
	plugins: [iifePlugin()],
	target: 'node18',
})
