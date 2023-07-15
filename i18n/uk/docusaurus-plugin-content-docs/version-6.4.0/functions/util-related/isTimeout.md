---
title: '$isTimeout'
description: '$isTimeout will check if the user is timeouted with Discord''s built-in timeout feature.'
id: isTimeout
---

`$isTimeout` will check if the user is timeouted with Discord's built-in timeout feature.

## Використання

```php
$isTimeout[guildID?;userID?]
```

## Параметри

| Поле     | Тип     | Опис                                            | Обов'язковий |
| -------- | ------- | ----------------------------------------------- |:------------:|
| guildID? | integer | The ID of the guild where they're timeouted in. |      ні      |
| userID?  | integer | The ID of the user that's timeouted.            |      ні      |

## Приклад(и)

This will check if you're timeouted and either return `true` or `false`:

```javascript
bot.command({
    name: 'isTimeout',
    code: `
  $isTimeout[$guildID;$authorID]
  `
});
```
