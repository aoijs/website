---
title: '$guildCount'
description: '$guildCount will return the amount of guilds of where your bot is in.'
id: guildCount
---

`$guildCount` will return the amount of guilds where your bot is in.

## الاستخدام

```php
$guildCount
```

## مثال

This will return the amount of guilds your bot is in:

```javascript
bot.command({
    name: 'guildCount',
    code: `
  I'm in $guildCount guilds!
  `
});
```
