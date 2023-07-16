---
title: $mentionedRolesCount
description: '$mentionedRolesCount gibt die Anzahl der Rollenangaben innerhalb einer Nachricht zurück.'
id: mentionedRolesCount
---

`$mentionedRolesCount` gibt die Anzahl der Rollenangaben innerhalb einer Nachricht zurück.

## Verwendung

```php
$mentionedRolesCount
```

## Beispiel(e)

Damit wird die Anzahl der erwähnten Rollen im angegebenen Text zurückgegeben:

```javascript
bot.command({
    name: 'mentionedRolesCount',
    code: `
  Du hast: $mentionedRolesCount Rolle Erwähnungen in deiner Nachricht!
`
});
```
