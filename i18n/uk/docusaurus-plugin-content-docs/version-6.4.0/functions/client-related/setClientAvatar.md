---
title: '$setClientAvatar'
description: '$setClientAvatar will change the clients'' avatar.'
id: setClientAvatar
---

`$setClientAvatar` will change the clients' avatar.

## Використання

```php
$setClientAvatar[URL]
```

## Параметри

| Поле | Тип   | Опис                | Обов'язковий |
| ---- | ----- | ------------------- |:------------:|
| URL  | рядок | The new avatar URL. |     так      |

## Приклад(и)

This will change the client's avatar to the command author's user avatar:

```javascript
bot.command({
    name: 'setClientAvatar',
    code: `
   $setClientAvatar[$userAvatar[$authorID]]`
});
```