---
title: '$allMembersCount'
description: '$allMembersCount will return the amount of members in your guild.'
id: allMembersCount
---

`$allMembersCount` will return the amount of members in your guild.

## Використання

```php
$allMembersCount
```

## Приклад(и)

This will return the amount of members in your guild:

```javascript
bot.command({
    name: 'allMembersCount',
    code: `
  $allMembersCount
  `
});
```