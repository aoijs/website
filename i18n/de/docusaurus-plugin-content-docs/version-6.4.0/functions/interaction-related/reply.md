---
title: $reply
description: '$reply wird auf eine bestimmte Nachricht antworten.'
id: reply
---

`$reply` wird auf eine bestimmte Nachricht antworten.

## Verwendung

```php
$reply[messageID?;mentionUser?]
```

## Verwendung

| Feld              | Typ        | Beschreibung                                                                                           | Erforderlich |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------------ |:------------:|
| nachrichtenID?    | ganze Zahl | Die ID der Nachricht, die beantwortet wird.                                                            |    falsch    |
| erwähne Benutzer? | boolean    | Erwähnen Sie den Autor in der Antwort? <br /> 1. **true** (Standard)  <br /> 2. **Falsch** |    falsch    |

## Beispiel(e)

Dies wird auf Ihre Befehlsnachricht antworten:

```javascript
bot.command({
    name: 'reply',
    code: `
   Hallo!
   $reply[$messageID;true]
  `
});
```