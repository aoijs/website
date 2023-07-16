---
title: $getTextSplitLength
description: '$getTextSplitLength wird die Anzahl der Split-Argumente in $textSplit zurückgeben'
id: getTextSplitLength
---

`$getTextSplitLength` gibt die Anzahl der Split-Argumente in `$textSplit` zurück.

## Verwendung

```php
$getTextSplitLength
```

## Beispiel(e)

Dies gibt `5` zurück, da fünf durch Kommas getrennte Argumente in `$textSplit`

```javascript
bot.command({
    name: 'getTextSplitLength',
    code: `
  $getTextSplitLength
  $textSplit[Hello, my, name, is, Leref;, ]
  `
});
```
