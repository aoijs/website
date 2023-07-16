---
title: '$allMembersCount'
description: '$allMembersCount devolverá la cantidad de miembros en su servidor.'
id: allMembersCount
---

`$allMembersCount` devolverá la cantidad de miembros en su servidor.

## Uso

```php
$allMembersCount
```

## Ejemplo(s)

Esto devolverá la cantidad de miembros en su servidor:

```javascript
bot.command({
    name: 'allMembersCount',
    code: `
  $allMembersCount
  `
});
```