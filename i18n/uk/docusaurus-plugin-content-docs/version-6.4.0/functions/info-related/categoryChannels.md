---
title: '$categoryChannels'
description: '$categoryChannels will return all channels of a given category.'
id: categoryChannels
---

`$categoryChannels` will return all channels of a given category.

## Використання

```php
$categoryChannels[categoryID;option?;sep?]
```

## Параметри

| Поле       | Тип     | Опис                                                                                                                                                       | Обов'язковий |
| ---------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| categoryID | integer | The ID of the category.                                                                                                                                    |     так      |
| option?    | рядок   | The option the bot will return the channels in. <br /> 1. **names** - returns channel names (default)  <br /> 2. **ids** - returns channel IDs |      ні      |
| sep?       | рядок   | The separator to separate the returned channels.                                                                                                           |      ні      |

## Приклад(и)

This will return all channels of the category of the channel where you execute the command in:

```javascript
bot.command({
    name: 'categoryChannels',
    code: `
  $categoryChannels[$channelCategoryID;names;, ]
  `
});
```