import defaultAccentMap from './accentMap.json';

class AccentFolding {
	#cache;
	#accentMap;

	constructor() {
		this.#accentMap = new Map([
			...AccentFolding.convertAccentMapToArray(defaultAccentMap),
		]);
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

	replace(text) {
		if (typeof text !== 'string') {
			throw new TypeError('Input must be a string');
		}
		return [...text].map((char) => this.#accentMap.get(char) || char).join('');
	}

	highlightMatch(str, fragment, wrapTag = 'b') {
		try {
			if (!fragment) return str;

			if (typeof str !== 'string' || typeof fragment !== 'string') {
				throw new TypeError('Both str and fragment must be strings');
			}

			if (typeof wrapTag !== 'string') {
				throw new TypeError('wrapTag must be a string');
			}

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
		} catch (error) {
			console.error('Error in highlightMatch:', error.message);
			throw error; // Return original string if there's an error
		}
	}

	#escapeHtml(unsafe) {
		return unsafe
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;');
	}

	static convertAccentMapToArray(accentMap) {
		return Object.entries(accentMap);
	}
}

export default AccentFolding;
