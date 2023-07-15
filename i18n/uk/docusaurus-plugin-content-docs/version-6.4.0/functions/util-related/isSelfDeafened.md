---
title: '$isSelfDeafened'
description: '$isSelfDeafened is similar but not to confuse with `$isDeafen`, this will check if the user deafened themselves.'
id: isSelfDeafened
---

`$isSelfDeafened` is similar but not to confuse with `$isDeafen`, this will check if the user deafened themselves.

## Використання

```php
$isSelfDeafened[userID?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                  | Обов'язковий |
| -------- | ------- | ----------------------------------------------------- |:------------:|
| userID?  | integer | ID of the user you want to check if they're deafened. |      ні      |
| guildID? | integer | ID of the guild where they're deafened in.            |      ні      |

## Приклад(и)

This will return either `true` or `false` depending on if you're deafened or not:

```javascript
bot.command({
    name: 'isSelfDeafened',
    code: `
  $isSelfDeafened
  `
});
```
