---
title: '$useChannel'
description: '$useChannel will use the specified channel and execute all function inside of it instead.'
id: useChannel
---

`$useChannel` will use the specified channel and execute all function inside of it instead.

## Використання

```php
$useChannel[channelID]
```

## Параметри

| Поле      | Тип     | Опис                            | Обов'язковий |
| --------- | ------- | ------------------------------- |:------------:|
| channelID | integer | Where to execute the functions. |     так      |

## Приклад(и)

This will send an embed in the current channel:

```javascript
bot.command({
    name: "useChannel",
    code: `
    $description[Hello!]
    $useChannel[$channelID]
    `
});
```