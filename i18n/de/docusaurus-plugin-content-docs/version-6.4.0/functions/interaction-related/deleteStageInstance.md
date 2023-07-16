---
title: $deleteStageInstance
description: '$deleteStageInstance wird eine bestehende Stageinstanz beenden.'
id: deleteStageInstance
---

`$deleteStageInstance` wird eine bestehende Stageinstanz beenden.

## Verwendung

```php
$deleteStageInstance[channelID]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                      | Erforderlich |
| --------- | ---------- | ------------------------------------------------- |:------------:|
| channelID | ganze Zahl | Die Stage Channel-ID der aktuellen Stage Instanz. |     wahr     |

## Beispiel(e)

Dies wird die aktuelle Instanz beenden: ( Stellen Sie sicher, dass stageID durch eine aktuelle stageID ersetzt wird)

```javascript
bot.command({
    name: 'deleteStageInstance',
    code: `
  $deleteStageInstance[stageInstance]
  `
});
```