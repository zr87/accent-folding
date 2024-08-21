import defaultAccentMap from './accentMap.js';

class AccentFolding {
	#cache;
	#accentMap;

	constructor(customMap = []) {
		this.#accentMap = new Map([...defaultAccentMap, ...customMap]);
		this.#cache = new Map();
	}

	#fold(s) {
		if (!s) return '';
		if (this.#cache.has(s)) return this.#cache.get(s);

		const ret = [...s]
			.map((char) => this.#accentMap.get(char) || char)
			.join('');
		this.#cache.set(s, ret);
		return ret;
	}

	highlightMatch(str, fragment, wrapTag = 'b') {
		if (!fragment) return str;

		const escapedFragment = fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		const strFolded = this.#fold(str).toLowerCase();
		const fragmentFolded = this.#fold(escapedFragment).toLowerCase();

		const re = new RegExp(fragmentFolded, 'g');
		let result = '';
		let lastIndex = 0;
		let hasMatch = false;

		strFolded.replace(re, (match, index) => {
			hasMatch = true;
			result += this.#escapeHtml(str.slice(lastIndex, index));
			result += `<${wrapTag}>${this.#escapeHtml(str.slice(index, index + match.length))}</${wrapTag}>`;
			lastIndex = index + match.length;
		});

		result += this.#escapeHtml(str.slice(lastIndex));

		return hasMatch ? result : str;
	}

	#escapeHtml(unsafe) {
		return unsafe
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;');
	}
}

export default AccentFolding;
