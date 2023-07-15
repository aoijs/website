---
title: '$guildCount'
description: '$guildCount will return the amount of guilds of where your bot is in.'
id: guildCount
---

`$guildCount` will return the amount of guilds where your bot is in.

## Modo de uso

```php
$guildCount
```

## Ejemplo(s)

This will return the amount of guilds your bot is in:

```javascript
bot.command({
    name: 'guildCount',
    code: `
  I'm in $guildCount guilds!
  `
});
```
