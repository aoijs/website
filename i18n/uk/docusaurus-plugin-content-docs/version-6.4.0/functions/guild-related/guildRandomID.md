---
title: '$guildRandomID'
description: '$guildRandomID will return a random guild ID.'
id: guildRandomID
---

`$guildRandomID` will return a random guild ID.

## Використання

```php
$guildRandomID
```

## Приклад(и)

This will return a random guild if of the guild's your bot is a member of:

```javascript
bot.command({
    name: 'guildRandomID',
    code: `
  $guildRandomID
  `
});
```
