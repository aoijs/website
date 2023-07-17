---
title: $stringEndsWith
description: '$stringEndsWith wird prüfen, ob das angegebene Argument mit etwas Spezifischem endet.'
id: stringEndsWith
---

`$stringEndsWith` wird überprüfen, ob das angegebene Argument mit etwas Spezifischem endet.

## Verwendung

```php
$stringEndsWith[text;check]
```

## Verwendung

| Feld       | Typ    | Beschreibung                                                           | Erforderlich |
| ---------- | ------ | ---------------------------------------------------------------------- |:------------:|
| text       | string | Der Text, der überprüft wird.                                          |     wahr     |
| überprüfen | string | Das Argument, das überprüft, ob der Text mit etwas Spezifischem endet. |     wahr     |

## Beispiel(e)

Dies liefert `true` als `aoi.js` endet mit `js`:

```javascript
bot.command({
    name: 'stringEndsWith',
    code: `
  $stringEndsWith[aoi.js;js]
  `
});
```