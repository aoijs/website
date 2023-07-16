---
title: '$djsEval'
description: '$djsEval wird den angegebenen discord.js Code ausführen.'
id: djsEval
---

`$djsEval` wird den angegebenen discord.js-Code ausführen.

## Verwendung

```php
$djsEval[code;returnCode?]
```

## Verwendung

| Feld         | Typ    | Beschreibung                                                                 | Erforderlich |
| ------------ | ------ | ---------------------------------------------------------------------------- |:------------:|
| kode         | string | Discord.js Code zum Ausführen.                                               |     wahr     |
| return Code? | string | Rückgabe-Code. <br /> 1. **true** <br /> 2. **false** (Standard) |    falsch    |

## Beispiel(e)

Dies gibt Ihre Benutzer-ID zurück:

```javascript
bot.command({
    name: "djsEval",
    code: `
  $djsEval[msg.author.id;true]
  `
});
```