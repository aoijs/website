---
title: '$usersBanned'
description: '$usersBanned will return the banned users of a guild.'
id: usersBanned
---

`$usersBanned` will return the banned users of a guild.

## الاستخدام

```php
$usersBanned[guildID?;force?;option?;sep?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                                                                             | مطلوب |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |:-----:|
| guildID? | Integer | The guild ID.                                                                                                            | false |
| force?   | boolean | 1. true. false (default)                                                                                                 | false |
| option?  | string  | How to return the banned users <br /> 1. **id** (default) <br /> 1. **username** <br /> 1. **mention** | false |
| sep?     | string  | Separator to separate multiple returned values.                                                                          | false |

## مثال

This will return the banned users of your guild as mention in an embed:

```javascript
bot.command({
    name: 'usersBanned',
    code: `
$description[$usersBanned[$guildID;false;mention;, ]]
  `
});
```
