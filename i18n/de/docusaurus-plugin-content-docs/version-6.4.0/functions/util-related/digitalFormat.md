---
title: $digitalFormat
description: '$digitalFormat gibt eine digital formatierte Zeit zurück, die von ms konvertiert wurde.'
id: digitalFormat
---

`$digitalFormat` konvertiert ms in digital formatierte, lesbare Zeit.

## Verwendung

```php
$digitalFormat[ms]
```

## Verwendung

| Feld | Typ    | Beschreibung                                        | Erforderlich |
| ---- | ------ | --------------------------------------------------- |:------------:|
| M    | anzahl | Zeit in Milisekunden, die Sie konvertieren möchten. |     wahr     |

## Beispiel(e)

Dies gibt `00:04:00` zurück, da `240000ms` vier Minuten sind:

```javascript
bot.command({
    name: 'digitalFormat',
    code: `
  $digitalFormat[240000]
  `
});
```
