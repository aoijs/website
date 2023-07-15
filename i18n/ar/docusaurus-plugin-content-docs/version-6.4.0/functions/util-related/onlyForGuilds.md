---
title: '$onlyForGuilds'
description: '$onlyForGuilds will check if the command was executed in one of the listed guilds and return a error message if not.'
id: onlyForGuilds
---

`$onlyForGuilds` will check if the command was executed in one of the listed guilds and return a error message if not.

## الاستخدام

```php
$onlyForGuilds[...guildIds;error]
```

## البارامترات

| Field       | النوع           | الديسكبربشين                                                                   | مطلوب |
| ----------- | --------------- | ------------------------------------------------------------------------------ |:-----:|
| ...guildIds | string, integer | Guilds you want to limit the command to.                                       | true  |
| error       | string          | Error to return when the command was not executed in any of the listed guilds. | true  |

## مثال

This will limit the command only to the listed guilds:

```javascript
bot.command({
    name: "onlyForGuilds",
    code: `
    Ok.
    $onlyForGuilds[guildID;guildID;You can't use that command here!]
    `
});
```