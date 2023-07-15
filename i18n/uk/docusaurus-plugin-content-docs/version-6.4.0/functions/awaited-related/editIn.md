---
title: '$editIn'
description: '$editIn will edit a message after a given time.'
id: editIn
---

`$editIn` will edit a message after a given time.

## Використання

```php
$editIn[time;...content]
```

## Параметри

| Поле    | Тип            | Опис                                            | Обов'язковий |
| ------- | -------------- | ----------------------------------------------- |:------------:|
| time    | string, number | After how much time the message will be edited. |     так      |
| content | рядок          | What the new content of the message should be.  |     так      |

## Приклад(и)

This will edit the sent message after five seconds:

```javascript
bot.command({
    name: 'editIn',
    code: `
  $editIn[5s;aoi.js is great, don't you agree?;Yes, I do!]
  I'll edit this message in 5 seconds!
  `
});
```
