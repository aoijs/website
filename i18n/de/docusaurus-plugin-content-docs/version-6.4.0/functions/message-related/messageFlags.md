---
title: $messageFlags
description: '$messageFlags gibt die Flaggen einer Nachricht zurück.'
id: messageFlags
---

`$messageFlags` gibt die Flaggen einer Nachricht zurück.

## Verwendung

```php
$messageFlags[messageID;sep?;channelID?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                       | Erforderlich |
| ------------- | ---------- | -------------------------------------------------- |:------------:|
| nachrichtenID | ganze Zahl | Die ID der Nachricht.                              |     wahr     |
| sep?          | string     | Separator um die zurückgegebenen Werte zu trennen. |    falsch    |
| channelID?    | ganze Zahl | ID des Kanals, in dem sich die Nachricht befindet. |    falsch    |

## Beispiel(e)

Dies werden die Meldungsflags Ihrer ersten Befehlsmeldung:

```javascript
bot.command({
    name: 'messageFlags',
    code: `
  $messageFlags[$messageID;, ;$channelID]
  `
});
```
