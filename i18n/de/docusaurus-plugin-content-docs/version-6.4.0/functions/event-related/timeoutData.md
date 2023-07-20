---
title: $timeoutData
description: '$timeoutData enthält Daten für $setTimeout Datenparameter, dies wird leer sein, wenn außerhalb der TimeoutCommand Codes verwendet wird.'
id: timeoutData
---

`$timeoutData` speichert Daten für $setTimeout Datenparameter, dies wird leer sein, wenn außerhalb der TimeoutCommand Codes verwendet wird.

## Verwendung

```php
$timeoutData[option]
```

## Verwendung

| Feld      | Typ    | Beschreibung              | Erforderlich |
| --------- | ------ | ------------------------- |:------------:|
| variieren | string | Timeout Data Optionsname. |     wahr     |

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