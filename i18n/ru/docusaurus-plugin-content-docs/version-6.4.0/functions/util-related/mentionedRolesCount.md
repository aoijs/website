---
title: $mentionedRolesCount
description: '$mentionedRolesCount возвращает количество упоминаний роли в сообщении.'
id: mentionedRolesCount
---

`$mentionedRolesCount` возвращает количество упоминаний о роли в сообщении.

## Использование

```php
$mentionedRolesCount
```

## Пример(ы)

Это возвращает количество упоминаний о роли в данном тексте текста:

```javascript
bot.command({
    name: 'mentionedRolesCount',
    code: `
  У вас есть: роль $mentionedRolesCount упоминает в вашем сообщении!
«
});
```
