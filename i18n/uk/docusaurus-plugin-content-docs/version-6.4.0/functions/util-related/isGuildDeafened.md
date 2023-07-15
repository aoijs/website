---
title: '$isGuildDeafened'
description: '$isGuildDeafened is similar but not to confuse with `$isDeafen`, this will check if the user is server deafened.'
id: isGuildDeafened
---

`$isGuildDeafened` is similar but not to confuse with `$isDeafen`, this will check if the user is server deafened.

## Використання

```php
$isGuildDeafened[userID?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                             | Обов'язковий |
| -------- | ------- | ---------------------------------------------------------------- |:------------:|
| userID?  | integer | The ID of the user you want to check if they're server deafened. |      ні      |
| guildID? | integer | The ID of the guild where they're server deafened in.            |      ні      |

## Приклад(и)

This will return either `true` or `false` depending on if you're server deafened or not:

```javascript
bot.command({
    name: 'isGuildDeafened',
    code: `
  $isGuildDeafened
  `
});
```
