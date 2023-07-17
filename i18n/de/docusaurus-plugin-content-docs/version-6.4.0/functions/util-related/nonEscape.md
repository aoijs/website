---
title: '$nonEscape'
description: '$nonEscape wird nicht mehr Sonderzeichen maskieren.'
id: nonEscape
---

`$nonEscape` wird nicht mehr Sonderzeichen maskieren.

## Verwendung

```php
$nonEscape[message]
```

## Verwendung

| Feld      | Typ    | Beschreibung                                      | Erforderlich |
| --------- | ------ | ------------------------------------------------- | ------------ |
| nachricht | string | Text, den Sie nicht entschlüsselt werden möchten. | wahr         |

## Beispiel(e)

Dies wird aufhören, bestimmte Zeichen zu maskieren:

```javascript
bot.command({
    name: 'nonEscape',
    code: `
  $nonEscape[Hello [;)]]
  `
});
```
