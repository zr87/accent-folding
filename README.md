# accent-folding

It wraps string fragment in <b> html tag. 
You can use custom folding tag by adding the name of your tag as third parameter (2nd example).

install with npm:
<pre>npm install accent-folding</pre>

Example code:
<pre>
<code>
accentFoldedHighlight("Fulanilo López", "lo"); // --> "Fulani<b>lo</b> <b>Ló</b>pez"

accentFoldedHighlight("Fulanilo López", "lo", "strong"); // --> "Fulani<strong>lo</strong> <strong>Ló</strong>pez"
</code>
</pre>
