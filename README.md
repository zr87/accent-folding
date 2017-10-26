# accent-folding

It wraps string fragment in `<b>` html tag by default. 

You can use custom folding tag by adding the name of your tag as third parameter (2nd example).

Install with npm:

```shell
npm install accent-folding
```

Example code:

```js
accentFoldedHighlight("Fulanilo López", "lo"); // --> "Fulani<b>lo</b> <b>Ló</b>pez"
accentFoldedHighlight("Fulanilo López", "lo", "strong"); // --> "Fulani<strong>lo</strong> <strong>Ló</strong>pez"
```
