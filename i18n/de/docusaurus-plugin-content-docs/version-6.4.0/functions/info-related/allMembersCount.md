---
title: $allMembersCount
description: '$allMembersCount wird die Anzahl der Mitglieder in deiner Gilde zurückgeben.'
id: allMembersCount
---

`$allMembersCount` wird die Anzahl der Mitglieder in deiner Gilde zurückgeben.

## Verwendung

```php
$allMembersCount
```

## Beispiel(e)

Dies gibt die Anzahl der Mitglieder in deiner Gilde zurück:

```javascript
bot.command({
    name: 'allMembersCount',
    code: `
  $allMembersCount
  `
});
```