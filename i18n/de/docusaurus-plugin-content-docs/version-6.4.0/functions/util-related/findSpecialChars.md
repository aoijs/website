---
title: '$findSpecialChars'
description: '$findSpecialChars gibt alle Sonderzeichen des angegebenen Arguments zurück.'
id: findSpecialChars
---

`$findSpecialChars` gibt alle Sonderzeichen des angegebenen Arguments zurück.

## Verwendung

```php
$findSpecialChars[text]
```

## Verwendung

| Feld | Typ    | Beschreibung                                   | Erforderlich |
| ---- | ------ | ---------------------------------------------- |:------------:|
| text | string | Text, in dem Sie Sonderzeichen finden möchten. |     wahr     |

## Beispiel(e)

Dies gibt `######` zurück:

```javascript
bot.command({
    name: 'findSpecialChars',
    code: `
  $findSpecialChars[Aoi.js is ###### great]
  `
});
```
