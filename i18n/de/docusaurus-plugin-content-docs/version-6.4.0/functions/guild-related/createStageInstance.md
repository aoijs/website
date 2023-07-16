---
title: $createStageInstance
description: '$createStageInstance wird eine Phase starten.'
id: createStageInstance
---

`$createStageInstance` startet eine Bühne.

## Verwendung

```php
$createStageInstance[channelID;topic;type?]
```

## Verwendung

| Feld      | Typ        | Beschreibung                         | Erforderlich |
| --------- | ---------- | ------------------------------------ |:------------:|
| channelID | ganze Zahl | Die Kanal-ID des Stage Channels.     |     wahr     |
| thema     | string     | Das Bühnenthema, das angezeigt wird. |     wahr     |
| typ?      | ganze Zahl | Der Stage-Typ. (unten aufgeführt)    |    falsch    |

<details open>
  <summary><h3> Zieltypen </h3> einladen</summary>

| Typ      | VALUE |
| -------- | ----- |
| PUBLIK   | 1     |
| PRIVATEN | 2     |

</details>

## Beispiel(e)

Dies wird eine neue Stage Instanz erstellen:

```javascript
bot.command({
    name: 'createStageInstance',
    code: `
  $createStageInstance[stageID;Testing!;1] 
  ` // "stageID" durch eine aktuelle Stage ID
});
```
