---
title: '$uri'
description: '$uri wird eine URL kodieren oder dekodieren.'
id: uri
---

`$uri` wird eine URL kodieren oder dekodieren.

## Verwendung

```php
$uri[text;type?]
```

## Verwendung

| Feld | Typ    | Beschreibung                                                                                                   | Erforderlich |
| ---- | ------ | -------------------------------------------------------------------------------------------------------------- |:------------:|
| text | string | Text zum Kodieren/Dekodieren.                                                                                  |     wahr     |
| typ? | string | Was ist mit dem gegebenen Text zu tun. <br /> 1. **Kodierung** (Standard) <br /> 2. **dekodieren** |    falsch    |

## Beispiel(e)

Dies wird einen gegebenen Text kodieren:

```javascript
bot.command({
    name: 'encode',
    code: `
  $uri[aoi.js is great :);encode]
  `
});
```

Dies wird einen gegebenen Text dekodieren:

```javascript
bot.command({
    name: 'decode',
    code: `
  $uri[aoi.js%20is%20great%20%3A);decode]
  `
});
```
