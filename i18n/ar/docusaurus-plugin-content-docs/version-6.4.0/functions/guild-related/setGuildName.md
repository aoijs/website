---
title: '$setGuildName'
description: '$setGuildName will change a guilds'' name.'
id: setGuildName
---

`$setGuildName` will change a guilds' name.

## الاستخدام

```php
$setGuildName[name;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                     | مطلوب |
| -------- | ------- | ------------------------------------------------ |:-----:|
| name     | string  | The new guild name.                              | true  |
| guildID? | Integer | The ID of the guild whose name will be modified. | false |

## مثال

This will change guild's name you're executing the command in to your username:

```javascript
bot.command({
    name: 'setGuildName',
    code: `
   $setGuildName[$username[$authorID];$guildID]`
});
```