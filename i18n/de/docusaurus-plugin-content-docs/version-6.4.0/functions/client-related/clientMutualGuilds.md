---
title: '$clientMutualGuilds'
description: '$clientMutualGuilds wird die gegenseitigen Server mit einem bestimmten Benutzer und dem Bot zurückgeben.'
id: clientMutualGuilds
---

`$clientMutualGuilds` wird die beiderseitigen Server mit einem bestimmten Benutzer und dem Bot zurückgeben.

## Verwendung

```php
$clientMutualGuilds[userID?;sep?]
```

## Parameter

| Feld    | Typ        | Beschreibung                                               | Erforderlich |
| ------- | ---------- | ---------------------------------------------------------- |:------------:|
| userID? | ganze Zahl | Die ID des Benutzers.                                      |    falsch    |
| sep?    | string     | Das Trennzeichen, um die zurückgegebenen Werte zu trennen. |    falsch    |

## Beispiel(e)

Dies wird die gemeinsamen Server von dir und dem Bot zurückgeben:

```javascript
bot.command({
    name: 'clientMutualGuilds',
    code: `
  $clientMutualGuilds[$authorID;, ]
  `
});
```
