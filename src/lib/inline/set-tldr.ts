// This is a special file that gets compiled down to an inlineable IIFE .js
// string by a loader plugin, and is then invoked by Puppeteer on either the
// local or remote tldraw page.

// It's sort of a glorified bookmarklet.

// Due to apparent tree shaking difficulties, Using imports dramatically
// increases the bundle size, but induces no measurable execution performance
// penalty vs. inlining the required functions in this file, and should be more
// maintainable.

// We can't simply bake the functions into the local tldraw instance because
// they need to work on live tldraw.com URLs as well.

// No top level await in IIFE or in ES6 (the target for the inline-bundler)

/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { type Editor, parseTldrawJsonFile } from 'tldraw'

declare global {
	interface Window {
		editor: Editor
		setTldr: (tldrData: string) => void
	}
}

if (!window.editor) throw new Error('Editor is undefined')
if (!window.editor.store) throw new Error('Store is undefined')

window.setTldr = (tldrData: string): void => {
	if (tldrData === undefined) return

	const parseFileResult = parseTldrawJsonFile({
		json: JSON.stringify(tldrData),
		schema: (window.editor as Editor).store.schema,
	})
	if (parseFileResult.ok) {
		const snapshot = parseFileResult.value.getSnapshot()
		;(window.editor as Editor).store.loadSnapshot(snapshot)
	} else {
		console.error(`Couldn't parse tldr file: ${String(parseFileResult.error.type)}`)
	}
}