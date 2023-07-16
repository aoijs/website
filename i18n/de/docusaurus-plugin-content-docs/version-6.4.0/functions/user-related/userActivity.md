---
title: $userActivity
description: '$activity wird die Aktivität eines Benutzers zurückgeben.'
id: userActivity
---

`$userActivity` gibt die aktuelle Aktivität eines Benutzers zurück.

## Verwendung

```php
$userActivity[guildID?;userID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung     | Erforderlich |
| -------- | ---------- | ---------------- |:------------:|
| guildID? | ganze Zahl | Die Gilden-ID.   |    falsch    |
| userID?  | ganze Zahl | Die Benutzer-ID. |    falsch    |

## Beispiel(e)

Dies wird deine aktuelle Aktivität zurückgeben:

```javascript
bot.command({
    name: 'userActivity',
    code: `
  $userActivity[$guildID;$authorID]
  `
});
```