---
title: '$setGuildName'
description: '$setGuildName will change a guilds'' name.'
id: setGuildName
---

`$setGuildName` will change a guilds' name.

## प्रोयोग

```php
$setGuildName[name;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                     |    चाहिए     |
| -------- | -------- | ------------------------------------------------ |:------------:|
| name     | स्ट्रिंग | The new guild name.                              |     true     |
| guildID? | integer  | The ID of the guild whose name will be modified. | असत्य (नहीं) |

## ट्रू (हा)

This will change guild's name you're executing the command in to your username:

```javascript
bot.command({
    name: 'setGuildName',
    code: `
   $setGuildName[$username[$authorID];$guildID]`
});
```