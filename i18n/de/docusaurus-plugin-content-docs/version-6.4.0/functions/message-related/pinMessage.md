---
title: '$pinMessage'
description: '$pinMessage wird eine bestimmte Nachricht anpinnen.'
id: pinMessage
---

`$pinMessage` wird eine bestimmte Nachricht anpinnen.

## Verwendung

```php
$pinMessage[messageID?;channelID?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                      | Erforderlich |
| ------------- | ---------- | ------------------------------------------------- |:------------:|
| nachrichtenID | ganze Zahl | Die ID der Nachricht die angepinnt wird.          |    falsch    |
| channelID     | ganze Zahl | Die Kanal-ID, in der sich die Nachricht befindet. |    falsch    |

## Beispiel(e)

Dies wird die Nachricht des Bots anpinnen:

```javascript
bot.command({
    Name: 'pinMessage',
    Code: `
  $pinMessage[$get[id]]
  $let[id;$sendMessage[Hello!;true]
  ` // Verwendung von $let & $get um die Nachricht ID
});
```