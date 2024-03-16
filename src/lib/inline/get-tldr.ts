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

import { type Editor, serializeTldrawJsonBlob } from 'tldraw'
import { uint8ArrayToBase64 } from 'uint8array-extras'

declare global {
	interface Window {
		editor: Editor
		getTldr: () => Promise<string>
	}
}

if (!window.editor) throw new Error('Editor is undefined')
if (!window.editor.store) throw new Error('Store is undefined')

window.getTldr = async (): Promise<string> => {
	const editor = window.editor as Editor

	try {
		const blob = await serializeTldrawJsonBlob(editor.store)
		const uint8Array = new Uint8Array(await blob.arrayBuffer())
		return uint8ArrayToBase64(uint8Array)
	} catch (error) {
		throw error instanceof Error ? error : new Error('Unknown error')
	}
}