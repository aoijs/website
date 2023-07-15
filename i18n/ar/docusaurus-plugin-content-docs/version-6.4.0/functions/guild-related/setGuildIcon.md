---
title: '$setGuildIcon'
description: '$setGuildIcon will change a guilds'' icon.'
id: setGuildIcon
---

`$setGuildIcon` will change a guilds' icon.

## الاستخدام

```php
$setGuildIcon[URL;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                 | مطلوب |
| -------- | ------- | -------------------------------------------- |:-----:|
| URL      | string  | URL of the new guild Icon.                   | true  |
| guildID? | Integer | The guild ID of where to set the guild Icon. | false |

## مثال

This will change guild's icon you're executing the command in to your user avatar:

```javascript
bot.command({
    name: 'setGuildIcon',
    code: `
   $setGuildIcon[$userAvatar[$authorID];$guildID]`
});
```