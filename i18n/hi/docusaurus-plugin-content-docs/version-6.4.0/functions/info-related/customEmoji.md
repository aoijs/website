---
title: '$customEmoji'
description: '$customEmoji will return a custom emoji.'
id: customEmoji
---

`$customEmoji` will return a custom emoji.

## प्रोयोग

```php
$customEmoji[emojiResolver;guildID?]
```

## पैरामीटर्स

| फील्ड         | टाइप            | डिस्क्रिप्शन                                                                                            |    चाहिए     |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------- |:------------:|
| emojiResolver | स्ट्रिंग        | Emoji name or ID.                                                                                       |     true     |
| guildID?      | string, integer | Where the emoji is from. <br /> 1. **global** <br /> 2. **guildID** - replace with guild ID | असत्य (नहीं) |

## ट्रू (हा)

This send a custom emoji of your choice, replace emojiResolver with an actual emoji name or ID:

Tries to search for the emoji in all guilds the bot is in:
```javascript
bot.command({
    name: 'customEmoji',
    code: `
  $customEmoji[emojiResolver;global]
  `
});
```

Tries to return the emoji of the given guild:
```javascript
bot.command({
    name: 'customEmoji',
    code: `
  $customEmoji[emojiResolver;specific guild ID]
  `
});
```