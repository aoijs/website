---
title: '$setGuildIcon'
description: '$setGuildIcon will change a guilds'' icon.'
id: setGuildIcon
---

`$setGuildIcon` will change a guilds' icon.

## प्रोयोग

```php
$setGuildIcon[URL;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                 |    चाहिए     |
| -------- | -------- | -------------------------------------------- |:------------:|
| URL      | स्ट्रिंग | URL of the new guild Icon.                   |     true     |
| guildID? | integer  | The guild ID of where to set the guild Icon. | असत्य (नहीं) |

## ट्रू (हा)

This will change guild's icon you're executing the command in to your user avatar:

```javascript
bot.command({
    name: 'setGuildIcon',
    code: `
   $setGuildIcon[$userAvatar[$authorID];$guildID]`
});
```