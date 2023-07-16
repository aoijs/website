---
title: '$usersInChannel'
description: '$usersInChannel wird alle Benutzer zurückgeben, die mit dem angegebenen Sprachkanal verbunden sind.'
id: usersInChannel
---

`$usersInChannel` wird alle Benutzer zurückgeben, die mit dem angegebenen Sprachkanal verbunden sind.

## Verwendung

```php
$usersInChannel[channelID;option?;sep?]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                                                                                           | Erforderlich |
| --------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |:------------:|
| channelID | ganze Zahl | Sprachkanal-ID.                                                                                                        |     wahr     |
| option?   | string     | Wie man die Benutzer <br /> 1 zurückgibt. **id** (default) <br /> 2. **Benutzer** - Erwähnung der Benutzer |    falsch    |
| sep?      | string     | Separator um mehrere zurückgegebene Werte zu trennen.                                                                  |    falsch    |

## Beispiel(e)

Dies gibt die Benutzer zurück, die mit einem Sprachkanal verbunden sind:

```javascript
bot.command({
    name: 'usersInChannel',
    code: `
  $usersInChannel[$voiceID;user;, ]
  `
});
```
