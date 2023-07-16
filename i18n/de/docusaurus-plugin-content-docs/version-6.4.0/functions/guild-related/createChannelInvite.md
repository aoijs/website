---
title: $createChannelInvite
description: '$createChannelInvite wird eine Channel-Einladung erstellen.'
id: createChannelInvite
---

`$createChannelInvite` wird eine Channel-Einladung erstellen.

## Verwendung

```php
$createChannelInvite[channelID?;...options]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                       | Erforderlich |
| ---------- | ---------- | -------------------------------------------------- |:------------:|
| channelID? | ganze Zahl | Die Kanal-ID, von der die Einladung erstellt wird. |    falsch    |
| optionen?  | objekt     | Optionen einladen.                                 |    falsch    |

<details open>
  <summary><h3> Zieltypen </h3> einladen</summary>

| Typ       | VALUE |
| --------- | ----- |
| STREAM    | 1     |
| ANWENDUNG | 2     |

</details>

## Beispiel(e)

Dies wird eine Einladung des Kanals erzeugen, in dem der Befehl ausgeführt wird:

```javascript
bot.command({
    name: 'createChannelInvite',
    code: `
  $createChannelInvite[$channelID]
  `
});
```

### Erweitertes Beispiel(e)

Erstelle Temporäre Einladungen mit eingeschränkten Nutzungen:

```javascript
bot.command({
    Name: 'createChannelInvite',
    Code: `
  $createChannelInvite[$channelID;
            "temporär": wahr,
            "maxAge": 650,
            "maxUses": 25,
            "unique": true
  }]
  `
});
```

Einladungen für Aktivitäten erstellen:

```javascript
bot.command({
    name: 'createChannelInvite',
    code: `
  $createChannelInvite[voiceID;{
            "targetApplication": "application ID",
            "targetType": 2
  }]
  `
});
```
