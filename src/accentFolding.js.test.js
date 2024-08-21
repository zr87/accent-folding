import { expect, describe, it } from 'vitest';
import AccentFolding from './accentFolding.js';

describe('AccentFolding', () => {
	const accentFolder = new AccentFolding();

	it('should recognize simple accents', () => {
		expect(accentFolder.highlightMatch('Fulanilo López', 'lo')).toBe(
			'Fulani<b>lo</b> <b>Ló</b>pez'
		);
		expect(accentFolder.highlightMatch('Erik Lørgensen', 'lo')).toBe(
			'Erik <b>Lø</b>rgensen'
		);
		expect(accentFolder.highlightMatch('James Lö', 'lo')).toBe(
			'James <b>Lö</b>'
		);
	});

	it("should wrap matched fragment with custom tag added in second parameter '<strong>'", () => {
		expect(
			accentFolder.highlightMatch('Fulanilo López', 'lo', 'strong')
		).toEqual('Fulani<strong>lo</strong> <strong>Ló</strong>pez');
	});

	it('wraps matched fragment with custom tag', () => {
		expect(accentFolder.highlightMatch('Fulanilo López', 'lo', 'strong')).toBe(
			'Fulani<strong>lo</strong> <strong>Ló</strong>pez'
		);
	});

	it('is case insensitive', () => {
		expect(accentFolder.highlightMatch('FULANILO LÓPEZ', 'lo')).toBe(
			'FULANI<b>LO</b> <b>LÓ</b>PEZ'
		);
	});

	it('handles empty strings', () => {
		expect(accentFolder.highlightMatch('', 'test')).toBe('');
		expect(accentFolder.highlightMatch('Test', '')).toBe('Test');
	});

	it('returns original string when no match is found', () => {
		expect(accentFolder.highlightMatch('Hello World', 'xyz')).toBe(
			'Hello World'
		);
	});

	it('handles multiple matches', () => {
		expect(accentFolder.highlightMatch('lólá lòlã', 'la')).toBe(
			'ló<b>lá</b> lò<b>lã</b>'
		);
	});

	it('handles special characters in fragment', () => {
		expect(accentFolder.highlightMatch('a+b=c', '+')).toBe('a<b>+</b>b=c');
	});

	// it('preserves HTML in original string', () => {
	//     expect(accentFold.highlightMatch("<p>Héllo</p>", "he")).toBe("<p><b>Hé</b>llo</p>");
	// });
});
