---
title: '$isSelfMuted'
description: '$isSelfMuted is similar but not to confuse with `$isMuted`, this will check if the user muted themselves.'
id: isSelfMuted
---

$isSelfMuted is similar but not to confuse with `$isMuted`, this will check if the user muted themselves.

## Використання

```php
$isSelfMuted[userID?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                               | Обов'язковий |
| -------- | ------- | -------------------------------------------------- |:------------:|
| userID?  | integer | ID of the user you want to check if they're muted. |      ні      |
| guildID? | integer | ID of the guild where they're muted in.            |      ні      |

## Приклад(и)

This will return either `true` or `false` depending on if you're muted (voice channel) or not:

```javascript
bot.command({
    name: 'isSelfDeafened',
    code: `
  $isSelfDeafened
  `
});
```
