---
title: '$addCmdReactions'
description: '$addCmdReactions will react with given emojis to the author''s message.'
id: addCmdReactions
---

`$addCmdReactions` will react with given emojis to the author's message.

## Використання

```php
$addCmdReactions[...reactions]
```

## Параметри

| Поле      | Тип   | Опис              | Обов'язковий |
| --------- | ----- | ----------------- |:------------:|
| reactions | рядок | Reactions to add. |     так      |

## Приклад(и)

This will add the given emojis to the author's response ("Hello!"):

```javascript
bot.command({
    name: 'addCmdReactions',
    code: `
Hello!
$addCmdReactions[🧡;❤]
  `
});
```
