---
title: $reverse
description: '$reverse wird den gegebenen Text rückgängig machen.'
id: reverse
---

`$reverse` wird den eingegebenen Text rückgängig machen.

## Verwendung

```php
$reverse[text]
```

## Verwendung

| Feld | Typ    | Beschreibung                             | Erforderlich |
| ---- | ------ | ---------------------------------------- |:------------:|
| text | string | Text, den Sie rückgängig machen möchten. |     wahr     |

## Beispiel(e)

Folgender Text wird lesbar:

```javascript
bot.command({
    name: 'reverse',
    code: `
  $reverse[!snoitalutargnoc neht ,siht daer ot elba er'uoy fi ,desrever si txet sihT]
  `
});
```