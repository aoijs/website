---
title: '$userTag'
description: '$userTag gibt den Benutzernamen und den Diskriminator eines Benutzers zurück.'
id: userTag
---

`$userTag` gibt den Benutzernamen und den Diskriminator eines Benutzers zurück.

## Verwendung

```php
$userTag[userID?]
```

## Verwendung

| Feld    | Typ        | Beschreibung     | Erforderlich |
| ------- | ---------- | ---------------- |:------------:|
| userID? | ganze Zahl | Die Benutzer-ID. |    falsch    |

## Beispiel(e)

Dies wird deinen Benutzernamen und Diskriminator zurückgeben:

```javascript
bot.command({
    name: 'userTag',
    code: `
  $userTag[$authorID]
  `
});
```
