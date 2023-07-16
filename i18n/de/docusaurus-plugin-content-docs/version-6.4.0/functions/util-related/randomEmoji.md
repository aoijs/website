---
title: '$randomEmoji'
description: '$randomEmoji gibt eine zufällige Emoji-ID zurück.'
id: randomEmoji
---

`$randomEmoji` gibt eine zufällige Emoji-ID zurück.

## Verwendung

```php
$randomEmoji
```

## Beispiel(e)

Dies gibt eine zufällige Emoji-ID deiner Gilde zurück:

```javascript
bot.command({
    name: 'randomEmoji',
    code: `
  $randomEmoji
  `
});
```
