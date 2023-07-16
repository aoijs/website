---
title: '$setTimeout'
description: '$setTimeout wird ein Timeout für eine bestimmte Aktion festlegen (die sogar nach einem Neustart des Bots weiter ausgeführt wird).'
id: setTimeout
---

`$setTimeout` wird ein Timeout für eine bestimmte Aktion festlegen (die sogar nach einem Neustart des Bots weiter ausgeführt wird).

## Verwendung

```php
$setTimeout[awaitedCmd;duration;timeoutData;returnId?;pulse?]
```

## Verwendung

| Feld          | Typ            | Beschreibung                                                                  | Erforderlich |
| ------------- | -------------- | ----------------------------------------------------------------------------- |:------------:|
| wartenedCmd   | string         | Warteter Befehl, der nach Ablauf der Dauer ausgeführt werden soll.            |     wahr     |
| dauern        | string, Nummer | Nach wieviel Zeit es ausführen wird / dies kann nicht über **21 Tage** gehen. |     wahr     |
| timeout-Daten | objekt         | Timeout-Daten.                                                                |     wahr     |
| zurückgeben?  | boolean        | Rückgabe-Timeout-ID.                                                          |    falsch    |
| pulsieren?    | anzahl         | Puls.                                                                         |    falsch    |

- Sie können Timeout-Daten mit `$timeoutData[name]` abrufen.
- Beachten Sie, dass die Dauer nicht über **21 Tage** gehen darf.

## Beispiel(e)

Dies sendet "Hallo!" nach 10 Sekunden im Befehl Ausführungskanal:

```javascript
bot.command({
    Name: "setTimeout",
    Code: `
    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]
    `
});

Bot. imeoutCommand({
    name: "timeoutCommand",
    code: `
    $channelSendMessage[$timeoutData[channelID]; ello, <@$timeoutData[authorID]>!]
    `
});
```