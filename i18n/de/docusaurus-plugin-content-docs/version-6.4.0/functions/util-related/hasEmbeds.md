---
title: $hasEmbeds
description: '$hasEmbeds wird prüfen, ob Einbettungen an die Nachricht angehängt sind.'
id: hasEmbeds
---

`$hasEmbeds` wird überprüfen, ob Einbettungen an die Nachricht angeschlossen sind.

## Verwendung

```php
$hasEmbeds[messageID;channelID]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                                                 | Erforderlich |
| ------------- | ---------- | ---------------------------------------------------------------------------- |:------------:|
| nachrichtenID | ganze Zahl | ID der Nachricht, die überprüft werden soll, ob sie eine Einbettung enthält. |     wahr     |
| channelID     | ganze Zahl | ID des Kanals, in dem sich die Nachricht befindet.                           |     wahr     |

## Beispiel(e)

Dies wird in `false` zurückgegeben, da keine Einbettungen mit Ihrer Nachricht verbunden sind:

```javascript
bot.command({
    name: 'hasEmbeds',
    code: `
  $hasEmbeds[$messageID;$channelID]
  `
});
```
