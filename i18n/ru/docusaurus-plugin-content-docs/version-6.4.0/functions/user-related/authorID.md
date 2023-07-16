---
title: $authorID
description: '$authorID вернёт идентификатор пользователя, выполнившего команду.'
id: authorID
---

`$authorID` вернёт идентификатор пользователя, выполнившего команду.

## Использование

```php
$authorID
```

## Пример(ы)

Это вернет ваш идентификатор:

```javascript
bot.command({
    name: 'authorID',
    code: `
  $authorID
  `
});
```