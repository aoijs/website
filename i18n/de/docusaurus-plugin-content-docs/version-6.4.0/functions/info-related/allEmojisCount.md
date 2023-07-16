---
title: $allEmojisCount
description: '$allEmojisCount gibt die Menge an Emojis eines bestimmten Typs zurück.'
id: allEmojisCount
---

`$allEmojisCount` gibt die Menge an Emojis eines bestimmten Typs zurück.

## Verwendung

```php
$allEmojisCount[type?]
```

## Verwendung

| Feld | Typ    | Beschreibung                                              | Erforderlich |
| ---- | ------ | --------------------------------------------------------- | ------------ |
| typ? | string | Geben Sie den Betrag zurück, den Sie zurückgeben möchten. | falsch       |

| Emoji Type       |          |
| ---------------- | -------- |
| Animierte Emojis | animiert |
| Stable Emojis    | normal   |

## Beispiel(e)

Dies gibt die Menge der Emojis in deiner Gilde zurück:

```javascript
bot.command({
    name: 'allEmojisCount',
    code: `
  $allEmojisCount
  `
});
```