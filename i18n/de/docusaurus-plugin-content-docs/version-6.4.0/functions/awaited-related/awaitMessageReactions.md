---
title: $awaitMessageReactions
description: '$awaitMessageReactions wird antworten, wenn ein Benutzer mit einem bestimmten Emoji reagiert.'
id: awaitMessageReactions
---

`$awaitMessageReactions` wird antworten, wenn ein Benutzer mit einem bestimmten Emoji reagiert.

## Verwendung

```php
$awaitMessageReactions[channelID;messageID;userFilter;time;reactions;commands;errorMessage?;awaitData?]
```

## Parameter

| Feld              | Typ        | Beschreibung                                                                                                           | Erforderlich |
| ----------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |:------------:|
| channelID         | ganze Zahl | Kanal-ID.                                                                                                              |     wahr     |
| nachrichtenID     | ganze Zahl | Nachrichten-ID.                                                                                                        |     wahr     |
| userfilter        | string     | Auf was der Bot antworten wird <br /> 1. **alle** <br /> 2. **spezifische Benutzer-ID** - jede Benutzer-ID |     wahr     |
| Zeit              | string     | Wie lange der Befehl dauert / wenn der Befehl abläuft.                                                                 |     wahr     |
| reaktionen        | string     | Reaktionen, Sie können mehrere hinzufügen, indem Sie sie durch Kommas trennen ( `,`)                                   |     wahr     |
| Befehle           | string     | Befehle, die ausgeführt werden, können Sie mehrere Emojis mit einem Komma trennen ( `,`)                               |     wahr     |
| fehlermitteilung? | string     | Fehlermeldung, wenn der Befehl abläuft.                                                                                |    falsch    |
| wartendaten?      | string     | Gewartete Daten.                                                                                                       |    falsch    |

**Stellen Sie sicher, dass Sie `GuildMessageReactions` als Absicht in Ihrer Hauptdatei haben.**

## Beispiel(e)

Dies wird dir antworten, wenn du mit dem "❤️" Emoji auf die Nachricht des Bots reagierst:

```js
bot.command({
    name: "awaitMessageReactions",
    code: `
  React with "❤️" for a surprise! 
  $awaitMessageReactions[$channelID;$messageID;$authorID;10s;❤️;erwartete Befehlsdexample;Ups! Du hast nicht rechtzeitig reagiert..]
  `
});

bot.awaitedCommand({
    name: "awaitedcommandexample",
    code: `
  Nizza, du hast mit :red_heart reagiert.
  `
});
```
