---
title: '$modifyEmoji'
description: '$modifyEmoji will modify a given custom emoji.'
id: modifyEmoji
---

`$modifyEmoji` will modify a given custom emoji.

## प्रोयोग

```php
$modifyEmoji[guildID;emojiID;name;...roles?]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                          |    चाहिए     |
| --------- | -------- | ----------------------------------------------------- |:------------:|
| guildID   | integer  | The ID of the guild of where the emoji is located in. |     true     |
| emojiID   | integer  | The Emoji ID.                                         |     true     |
| name      | स्ट्रिंग | The new emoji name.                                   |     true     |
| ...roles? | integer  | Roles that will be able to use that emoji.            | असत्य (नहीं) |

## ट्रू (हा)

This will edit a existing emoji / change its name to "Example":

```javascript
bot.command({
    name: 'modifyEmoji',
    code: `
  $modifyEmoji[$guildID;emojiID;Example]
  `
});
```
