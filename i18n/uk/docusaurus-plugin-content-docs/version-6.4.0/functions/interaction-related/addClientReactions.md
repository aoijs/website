---
title: '$addClientReactions'
description: '$addClientReactions will add a reaction to the bot''s message.'
id: addClientReactions
---

`$addClientReactions` will add a reaction to the bot's message.

## Використання

```php
$addClientReactions[...reactions]
```

## Параметри

| Поле      | Тип   | Опис              | Обов'язковий |
| --------- | ----- | ----------------- |:------------:|
| reactions | рядок | Reactions to add. |     так      |

## Приклад(и)

This will add the given emojis to the bot's response ("Hello!"):

```javascript
bot.command({
    name: 'addClientReactions',
    code: `
    Hello!
    $addClientReactions[🧡;❤]
  `
});
```