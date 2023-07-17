---
title: '$eval'
description: '$eval wird den angegebenen aoi.js-Code ausführen.'
id: eval
---

`$eval` wird den angegebenen aoi.js-Code ausführen.

## Verwendung

```php
$eval[code;returnCode?;sendMessage?;returnExecution?;returnID?]
```

## Verwendung

| Feld              | Typ     | Beschreibung                                                                                                                | Erforderlich |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |:------------:|
| kode              | string  | Aoi.js auszuführenden Code.                                                                                                 |     wahr     |
| return Code?      | boolean | Rückgabe-Code. <br /> 1. **true** <br /> 2. **false** (Standard)                                                |    falsch    |
| senden?           | boolean | Ausgabe senden. <br /> 1. **true** <br /> 2. **false** (Standard)                                               |    falsch    |
| return Execution? | boolean | Gibt weitere Informationen über den ausgeführten Code zurück. <br /> 1. **true** <br /> 2. **false** (Standard) |    falsch    |
| return ID?        | boolean | Rücksende-Nachrichten-ID, <br /> 1. **true** <br /> 2. **false** (Standard)                                     |    falsch    |

## Beispiel(e)

Dies gibt Ihre Benutzer-ID zurück:

```javascript
bot.command({
    name: "eval",
    code: `
    \`\`\`
    $eval[$authorID;true;true;true;true]
    \`\`\`
  `
});
```