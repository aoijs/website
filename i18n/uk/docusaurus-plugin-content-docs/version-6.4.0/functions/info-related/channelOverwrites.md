---
title: '$channelOverwrites'
description: '$channelOverwrites will return the given channel''s overwrites.'
id: channelOverwrites
---

`$channelOverwrites` will return the given channel's overwrites.

## Використання

```php
$channelOverwrites[channelID?;response?;sep?]
```

## Параметри

| Поле       | Тип     | Опис                                                                 | Обов'язковий |
| ---------- | ------- | -------------------------------------------------------------------- |:------------:|
| channelID? | integer | ID of the channel you want the channel overwrites of.                |      ні      |
| response?  | рядок   | The format the channel overwrites will be returned in.               |      ні      |
| sep?       | рядок   | The separator to split the channel overwrites if there are multiple. |      ні      |

|     Тип     | Output                         |
|:-----------:| ------------------------------ |
| `{mention}` | Mentions the role or user      |
|  `{type}`   | Returns the type, user or role |
|  `{allow}`  | The granted permissions        |
|  `{deny}`   | The denied permissions         |

## Приклад(и)

This will return the channel overwrites of the channel where you execute the command in:

```javascript
bot.command({
    name: 'channelOverwrites',
    code: `
  $channelOverwrites[$channelID;{mention} {type} {allow} {deny};, ]
  `
});
```