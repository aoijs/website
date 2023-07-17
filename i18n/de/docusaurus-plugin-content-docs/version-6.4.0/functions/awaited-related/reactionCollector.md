---
title: $reactionCollector
description: '$reactionCollector wird einen Reaktionssammler für eine bestimmte Nachricht erstellen.'
id: reactionCollector
---

`$reactionCollector` wird einen Reaktionssammler für eine bestimmte Nachricht erstellen.

## Verwendung

```php
$reactionCollector[channelID;messageID;userFilters;time;reactions;awaitedCommands;removeReaction?;awaitData?;endAwait?]
```

## Parameter

| Feld                | Typ        | Beschreibung                                                                                                           | Erforderlich |
| ------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |:------------:|
| channelID           | ganze Zahl | kanal-ID                                                                                                               |     wahr     |
| nachrichtenID       | ganze Zahl | nachrichten-ID                                                                                                         |     wahr     |
| userfilter          | string     | auf was der Bot antworten wird <br /> 1. **alle** <br /> 2. **spezifische Benutzer-ID** - jede Benutzer-ID |     wahr     |
| Zeit                | string     | wenn der Befehl abläuft                                                                                                |     wahr     |
| reaktionen          | string     | reagiert, können Sie mehrere Emojis mit einem Komma trennen ( `,`)                                                     |     wahr     |
| wartende Befehle    | string     | Befehle zum Ausführen können mehrere Emojis mit einem Komma trennen ( `,`)                                             |     wahr     |
| reaktion entfernen? | string     | entferne die Reaktionen nach den ausgeführten Befehlen                                                                 |    falsch    |
| wartendaten?        | string     | erwartete Daten                                                                                                        |    falsch    |
| endAwait?           | string     | erwarteter Befehl beenden / erwarteter Befehl der ausgeführt werden soll, wenn Timer endet                             |    falsch    |

## Beispiel(e)

Dies sendet eine Nachricht, wenn Sie eine Reaktion hinzufügen:

```js
bot.command({
    Name: "reactionCollector",
    Code: `
  $reactionCollector[$channelID;$splitText[1];$authorID;10m;👀;awaitReaction;;;true]
  $textSplit[$sendMessage[React with "👀" for something special!;true]; ]
  `
});

Bot. waitedCommand({
    name: "awaitReaction",
    code: `
  $sendMessage[👀 what's this?]
  `
});
```

