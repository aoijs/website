---
title: '$awaitCmdReactions'
description: '$awaitCmdReactions wird antworten, wenn ein Benutzer auf die erste Befehlsnachricht mit einem bestimmten Emoji reagiert.'
id: awaitCmdReactions
---

`$awaitCmdReactions` wird antworten, wenn ein Benutzer auf die erste Befehlsnachricht mit einem bestimmten Emoji reagiert.

## Verwendung

```php
$awaitCmdReactions[userFilter;time;reactions;commands;errorMsg?;awaitData?]
```

## Parameter

| Feld         | Typ    | Beschreibung                                                                                                           | Erforderlich |
| ------------ | ------ | ---------------------------------------------------------------------------------------------------------------------- |:------------:|
| userfilter   | string | Auf was der Bot antworten wird <br /> 1. **alle** <br /> 2. **spezifische Benutzer-ID** - jede Benutzer-ID |     wahr     |
| Zeit         | string | Wie lange der Befehl dauert / wenn der Befehl abläuft.                                                                 |     wahr     |
| reaktionen   | string | Reaktionen, auf die der Bot hören wird, können Sie mehrere Emojis mit einem Komma trennen ( `,`)                       |     wahr     |
| Befehle      | string | Befehle, die ausgeführt werden, können Sie mehrere Emojis mit einem Komma trennen ( `,`)                               |     wahr     |
| errorMsg?    | string | Fehlermeldung, wenn der Befehl abläuft.                                                                                |    falsch    |
| wartendaten? | string | Gewartete Daten.                                                                                                       |    falsch    |

**Stellen Sie sicher, dass Sie `GuildMessageReactions` als Absicht in Ihrer Hauptdatei haben.**

## Beispiel(e)

Dies wird dir antworten, wenn du mit dem "❤️" Emoji auf deine erste Befehlsnachricht reagierst:

```js
bot.command({
    name: "awaitCmdReaction",
    code: `
  React with "❤️" for a surprise! 
  $awaitCmdReactions[$authorID;10s;❤️;wartete Befehlsbeispiel;Hoppla! Du hast nicht rechtzeitig reagiert..]
  `
});

bot.awaitedCommand({
    name: "awaitedCommandExample",
    code: `
  Nizza, du hast mit :red_heart reagiert.
  `
});
```