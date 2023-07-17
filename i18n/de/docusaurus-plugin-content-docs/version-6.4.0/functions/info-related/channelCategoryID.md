---
title: '$channelCategoryID'
description: '$channelCategoryID wird die Eltern eines bestimmten Kanals zurückgeben.'
id: channelCategoryID
---

`$channelCategoryID` wird das Elternteil eines bestimmten Kanals zurückgeben.

## Verwendung

```php
$channelCategoryID[channelID?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                            | Erforderlich |
| ---------- | ---------- | ----------------------------------------------------------------------- |:------------:|
| channelID? | ganze Zahl | ID eines Kanals, von dem der übergeordnete Kanal abgerufen werden soll. |    falsch    |

## Beispiel(e)

Dies gibt die Kategorie-ID des Textkanals zurück, in dem Sie den Befehl ausführen:

```javascript
bot.command({
    name: 'channelCategoryID',
    code: `
  $channelCategoryID[$channelID]
  `
});
```