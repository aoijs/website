---
title: '$isValidHex'
description: '$isValidHex wird prüfen, ob die angegebene Hex/Dezimalfarbe gültig ist.'
id: isValidHex
---

`$isValidHex` wird überprüfen, ob die angegebene Hex/Dezimalfarbe gültig ist.

## Verwendung

```php
$isValidHex[colorResolver]
```

## Verwendung

| Feld          | Typ              | Beschreibung                     | Erforderlich |
| ------------- | ---------------- | -------------------------------- |:------------:|
| colorResolver | string, Ganzzahl | Hex / Dezimalfarbe Zeichenkette. |     wahr     |

## Beispiel(e)

Dies liefert `true` als `#30dbd8` ist eine gültige Hex-Farbe:

```javascript
bot.command({
    name: 'isValidHex',
    code: `
  $isValidHex[#30dbd8]
  `
});
```

Dies gibt `true` sowie `80` eine gültige Hexadezimalfarbe zurück:

```javascript
bot.command({
    name: 'isValidHex',
    code: `
  $isValidHex[80]
  `
});
```
