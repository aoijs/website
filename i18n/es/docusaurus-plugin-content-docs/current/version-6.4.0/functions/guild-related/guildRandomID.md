---
title: '$guildRandomID'
description: '$guildRandomID will return a random guild ID.'
id: guildRandomID
---

`$guildRandomID` will return a random guild ID.

## Modo de uso

```php
$guildRandomID
```

## Ejemplo(s)

This will return a random guild if of the guild's your bot is a member of:

```javascript
bot.command({
    name: 'guildRandomID',
    code: `
  $guildRandomID
  `
});
```
