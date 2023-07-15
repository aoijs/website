---
title: '$onlyForChannels'
description: '$onlyForChannels will check if the command was executed in one of the listed channels and return a error message if not.'
id: onlyForChannels
---

`$onlyForChannels` will check if the command was executed in one of the listed channels and return a error message if not.

## Використання

```php
$onlyForChannels[...categoryIds;error]
```

## Параметри

| Поле          | Тип             | Опис                                                                             | Обов'язковий |
| ------------- | --------------- | -------------------------------------------------------------------------------- |:------------:|
| ...channelIds | string, integer | Channels you want to limit the command to.                                       |     так      |
| error         | рядок           | Error to return when the command was not executed in any of the listed channels. |     так      |

## Приклад(и)

This will limit the command only to the listed channels:

```javascript
bot.command({
    name: "onlyForChannels",
    code: `
    Ok.
    $onlyForChannels[channelID;channelID;You can't use that command here!]
    `
});
```