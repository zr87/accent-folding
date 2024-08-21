# accent-folding

---

## Description

A case-insensitive accent folding function that replaces accented characters with their unaccented equivalents

### Key Features:

- Accent-insensitive matching
- Customizable highlight wrapping (can use any HTML tag)
- Preserves original string formatting in the output
- Handles various Unicode characters, including fullwidth ASCII
- wraps string fragment in `<b>` html tag by default.

### Potential Use Cases:

- Search functionality in applications where accents should be ignored
- Highlighting matched terms in search results

## Usage

Install with npm:

```shell
npm install accent-folding
```

or with pnpm:

```shell
pnpm install accent-folding
```

```shell
yarn add accent-folding
```

Simple use-case

```js
import AccentFolding from 'accent-folding';

const af = new AccentFolding();

af.highlightMatch('Fulanilo López', 'lo'); // --> "Fulani<b>lo</b> <b>Ló</b>pez"
```

Using with custom html tag

```js
af.highlightMatch('Fulanilo López', 'lo', 'strong'); // --> "Fulani<strong>lo</strong> <strong>Ló</strong>pez"
```

## Requirements

Node.js version 14.7 or higher

## Legacy usage (v1)

Install with npm:

```
npm install accent-folding@1
```

Example:

```js
const accentFoldedHighlight = require('accent-folding');

accentFoldedHighlight('Fulanilo López', 'lo'); // --> "Fulani<b>lo</b> <b>Ló</b>pez"
accentFoldedHighlight('Fulanilo López', 'lo', 'strong'); // --> "Fulani<strong>lo</strong> <strong>Ló</strong>pez"
```

## Roadmap

See the [Roadmap](./ROADMAP.md 'View the project roadmap') for planned features and future improvements.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
