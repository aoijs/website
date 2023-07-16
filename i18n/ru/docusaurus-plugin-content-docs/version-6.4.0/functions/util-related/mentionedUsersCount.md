---
title: $mentionedUsersCount
description: '$mentionedUsersCount возвращает количество упоминаний пользователя в сообщении.'
id: mentionedUsersCount
---

`$mentionedUsersCount` возвращает количество упоминаний пользователя в сообщении.

## Использование

```php
$mentionedUsersCount
```

## Пример(ы)

Это возвращает количество упоминаний пользователем в указанном тексте:

```javascript
bot.command({
    name: 'mentionedUsersCount',
    code: `
  Количество пользовательских mentions: $mentionedUsersCount
`
});
```
