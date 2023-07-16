---
title: '$getGuildInvite'
description: '$getGuildInvite wird eine Gildeneinladung erstellen.'
id: getGuildInvite
---

`$getGuildInvite` wird eine Gildeneinladung erstellen.

## Verwendung

```php
$getGuildInvite[guildID?;...options]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                             | Erforderlich |
| --------- | ---------- | -------------------------------------------------------- |:------------:|
| guildID?  | ganze Zahl | Die Gilden-ID, von der die Einladung zurückgegeben wird. |    falsch    |
| optionen? | string     | Optionsobjekt einladen.                                  |    falsch    |

<details>
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
    name: 'getGuildInvite',
    code: `
  $getGuildInvite[$guildID]
  `
});
```

### Erweitertes Beispiel

Erstelle Temporäre Einladungen mit eingeschränkten Nutzungen:

```javascript
bot.command({
    Name: 'getGuildInvite',
    Code: `
  $getGuildInvite[$guildID;
            "temporär": wahr,
            "maxAge": 650,
            "maxUses": 25,
            "unique": true
  }]
  `
});
```
