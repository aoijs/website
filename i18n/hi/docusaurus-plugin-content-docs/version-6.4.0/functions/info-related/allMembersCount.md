---
title: '$allMembersCount'
description: '$allMembersCount will return the amount of members in your guild.'
id: allMembersCount
---

`$allMembersCount` will return the amount of members in your guild.

## प्रोयोग

```php
$allMembersCount
```

## उदाहरण

This will return the amount of members in your guild:

```javascript
bot.command({
    name: 'allMembersCount',
    code: `
  $allMembersCount
  `
});
```