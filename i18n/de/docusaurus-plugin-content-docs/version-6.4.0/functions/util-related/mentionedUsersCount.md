---
title: $mentionedUsersCount
description: '$mentionedUsersCount gibt die Anzahl der Benutzerangaben innerhalb einer Nachricht zurück.'
id: mentionedUsersCount
---

`$mentionedUsersCount` gibt die Anzahl der Erwähnungen innerhalb einer Nachricht zurück.

## Verwendung

```php
$mentionedUsersCount
```

## Beispiel(e)

Dies gibt die Anzahl der Benutzerangaben im angegebenen Text zurück:

```javascript
bot.command({
    name: 'mentionedUsersCount',
    code: `
  Anzahl der Benutzernamen: $mentionedUsersCount
`
});
```
