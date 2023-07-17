---
title: $randomString
description: '$randomString erzeugt einen zufälligen String.'
id: randomString
---

`$randomString` erzeugt einen zufälligen String.

## Verwendung

```php
$randomString[range;diffExec?]
```

## Verwendung

| Feld      | Typ     | Beschreibung                                   | Erforderlich |
| --------- | ------- | ---------------------------------------------- |:------------:|
| range     | anzahl  | Bereich der zufällig generierten Zeichenkette. |     wahr     |
| diffExec? | boolean |                                                |    falsch    |

## Beispiel(e)

Hiermit wird eine zufällige Zeichenkette von zwanzig Zeichen zurückgegeben:

```javascript
bot.command({
    name: 'randomString',
    code: `
  $randomString[20]
  `
});
```
