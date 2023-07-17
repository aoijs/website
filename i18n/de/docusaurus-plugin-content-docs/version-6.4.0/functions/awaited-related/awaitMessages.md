---
title: $awaitMessages
description: '$awaitMessages wird antworten, sobald eine bestimmte Nachricht vom angegebenen Benutzer gesendet wurde.'
id: awaitMessages
---

`$awaitMessages` wird antworten, sobald eine bestimmte Nachricht vom angegebenen Benutzer gesendet wurde.

## Verwendung

```php
$awaitMessages[channelID;userFilter;time;replies;cmds;errorMessage?;awaitData?;dm?]
```

## Parameter

| Feld              | Typ        | Beschreibung                                                                                                             | Erforderlich |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------ |:------------:|
| channelID         | ganze Zahl | Kanal-ID.                                                                                                                |     wahr     |
| userfilter        | ganze Zahl | Benutzer-Filter <br /> 1. **alle** <br /> 2. **spezifischer Benutzer** - jede Benutzer-ID                    |     wahr     |
| Zeit              | string     | Wie lange der Befehl dauert / wenn er abläuft.                                                                           |     wahr     |
| antworten         | string     | Auf die Antwort des Bots können mehrere Wörter mit einem Komma getrennt werden (oder "alles", um auf alles zu antworten) |     wahr     |
| cmds              | string     | Befehle, die ausgeführt werden, mehrere Befehle können mit einem Komma getrennt werden.                                  |     wahr     |
| fehlermitteilung? | string     | Fehlermeldung wenn der Befehl abläuft.                                                                                   |    falsch    |
| wartendaten?      | string     | Gewartete Daten.                                                                                                         |    falsch    |
| dm?               | ganze Zahl | Benutzer-ID, wo der Befehl ausgeführt werden kann.                                                                       |    falsch    |

## Beispiel(e)

Dies wird auf jede Nachricht antworten, die Sie nach dem Ausführen des Befehls senden:

```js
bot.command({
    name: "awaitMessages",
    code: `
  $awaitMessages[$channelID;$authorID;15s;allen;awaitedcommandexample;Oh? Du möchtest nicht mit mir sprechen..?] 
  Wie lautet dein Name?
  `
    // Bitte stelle sicher, dass der wartende Command-Name ALLE Kleinbuchstaben ist oder dass er nicht funktioniert.
});

bot.awaitedCommand({
    name: "awaitedcommandexample",
    code: `
  Nice to meet you, $message!
  `
});
```
