---
title: '$modifyEmoji'
description: '$modifyEmoji will modify a given custom emoji.'
id: modifyEmoji
---

`$modifyEmoji` will modify a given custom emoji.

## الاستخدام

```php
$modifyEmoji[guildID;emojiID;name;...roles?]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                          | مطلوب |
| --------- | ------- | ----------------------------------------------------- |:-----:|
| guildID   | Integer | The ID of the guild of where the emoji is located in. | true  |
| emojiID   | Integer | The Emoji ID.                                         | true  |
| name      | string  | The new emoji name.                                   | true  |
| ...roles? | Integer | Roles that will be able to use that emoji.            | false |

## مثال

This will edit a existing emoji / change its name to "Example":

```javascript
bot.command({
    name: 'modifyEmoji',
    code: `
  $modifyEmoji[$guildID;emojiID;Example]
  `
});
```
