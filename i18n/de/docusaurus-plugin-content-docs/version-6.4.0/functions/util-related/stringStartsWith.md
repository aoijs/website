---
title: $stringStartsWith
description: '$stringStartsWith wird prüfen, ob das angegebene Argument mit etwas Spezifischem beginnt.'
id: stringStartsWith
---

`$stringStartsWith` wird überprüfen, ob das angegebene Argument mit etwas Spezifischem beginnt.

## Verwendung

```php
$stringStartsWith[text;check]
```

## Verwendung

| Feld       | Typ    | Beschreibung                                                             | Erforderlich |
| ---------- | ------ | ------------------------------------------------------------------------ |:------------:|
| text       | string | Der Text, der überprüft wird.                                            |     wahr     |
| überprüfen | string | Das Argument, das überprüft, ob der Text mit etwas Spezifischem beginnt. |     wahr     |

## Beispiel(e)

Dies gibt `true` als `aoi.js` beginnt mit `aoi`:

```javascript
bot.command({
    name: 'stringStartsWith',
    code: `
  $stringStartsWith[aoi.js;aoi]
  `
});
```