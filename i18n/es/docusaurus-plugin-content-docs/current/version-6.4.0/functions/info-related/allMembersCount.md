---
title: '$allMembersCount'
description: '$allMembersCount devolverá la cantidad de miembros en su servidor.'
id: allMembersCount
---

`$allMembersCount` devolverá la cantidad de miembros en su servidor.

## Modo de uso

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