---
title: '$modifyEmoji'
description: '$modifyEmoji will modify a given custom emoji.'
id: modifyEmoji
---

`$modifyEmoji` will modify a given custom emoji.

## Використання

```php
$modifyEmoji[guildID;emojiID;name;...roles?]
```

## Параметри

| Поле      | Тип     | Опис                                                  | Обов'язковий |
| --------- | ------- | ----------------------------------------------------- |:------------:|
| guildID   | integer | The ID of the guild of where the emoji is located in. |     так      |
| emojiID   | integer | The Emoji ID.                                         |     так      |
| назва     | рядок   | The new emoji name.                                   |     так      |
| ...roles? | integer | Roles that will be able to use that emoji.            |      ні      |

## Приклад(и)

This will edit a existing emoji / change its name to "Example":

```javascript
bot.command({
    name: 'modifyEmoji',
    code: `
  $modifyEmoji[$guildID;emojiID;Example]
  `
});
```
