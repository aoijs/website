---
title: '$isBot'
description: '$isBot wird prüfen, ob der angegebene Benutzer ein Bot ist.'
id: isBot
---

`$isBot` wird überprüfen, ob der angegebene Benutzer ein Bot ist.

## Verwendung

```php
$isBot[userID?]
```

## Verwendung

| Feld    | Typ        | Beschreibung                                                | Erforderlich |
| ------- | ---------- | ----------------------------------------------------------- |:------------:|
| userID? | ganze Zahl | Benutzer-Id zu überprüfen, ob es sich um einen Bot handelt. |    falsch    |

## Beispiel(e)

Dies wird `true` zurückgeben, da Ihr Bot offensichtlich ein Bot ist:

```javascript
bot.command({
    name: 'isBot',
    code: `
  $isBot[$clientID]
  `
});
```
