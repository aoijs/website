---
title: $loop
description: '$loop wird erwartete Befehle eine bestimmte Zeit ausführen.'
id: loop
---

`$loop` wird erwartete Befehle nach der angegebenen Zeit ausführen.

## Verwendung

```php
$loop[time;awaitData;...awaitedCmds]
```

## Verwendung

| Feld           | Typ    | Beschreibung                          | Erforderlich |
| -------------- | ------ | ------------------------------------- |:------------:|
| Zeit           | string | Wie oft die Schleife ausgeführt wird. |     wahr     |
| warte Daten    | objekt | Gewartete Daten.                      |     wahr     |
| ...warten Cmds | string | Erwartete Befehle zum Ausführen.      |     wahr     |

## Beispiel(e)

Dies führt eine Schleife aus, die die gesendete Nachricht 5 Mal mit dem angegebenen Inhalt in `awaitData` bearbeitet:

```javascript
bot.command({
    name: "loop",
    code: `
    $loop[5;{ "message": "$get[messageID]", "channel": "$channelID" };editMessage]
    $let[messageID;$sendMessage[My ping is: $pingMS;true]]
    `
});
```

Wir verwenden `$awaitData` um die angegebenen Eigenschaften im Feld `awaitData` abzurufen, das sich im Schleifenbefehl befindet.

```javascript
bot.awaitedCommand({
    name: "editMessage",
    code: `
    $editMessage[$awaitData[message];$pingMS;$awaitData[channel]]
    $wait[5s]
    `
});
```