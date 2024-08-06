# accent-folding

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

or  with pnpm:

```shell
pnpm install accent-folding
```

### simple :

```js
import AccentFolding from "accent-folder"; //import e

const af = new AccentFolding() // 

af.highlightMatch("Fulanilo López", "lo"); // --> "Fulani<b>lo</b> <b>Ló</b>pez"
```
Using with custom html tag

```js
af.highlightMatch("Fulanilo López", "lo", "strong"); // --> "Fulani<strong>lo</strong> <strong>Ló</strong>pez"
```


# Legacy usage (v1)

Install with npm:
```
npm install accent-folding@1
```

Example:
```js

const accentFoldedHighlight = require('accent-folding');

accentFoldedHighlight("Fulanilo López", "lo"); // --> "Fulani<b>lo</b> <b>Ló</b>pez"
accentFoldedHighlight("Fulanilo López", "lo", "strong"); // --> "Fulani<strong>lo</strong> <strong>Ló</strong>pez"

```
