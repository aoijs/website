---
title: '$deleteEmojis'
description: '$deleteEmojis will delete multiple emoji.'
id: deleteEmojis
---

`$deleteEmojis` will delete multiple emoji.

## प्रोयोग

```php
$deleteEmojis[...emojis]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन                                                    | चाहिए |
| ------ | -------- | --------------------------------------------------------------- |:-----:|
| emojis | स्ट्रिंग | Emoji Name, ID or full form of the emoji which will be deleted. | true  |

## ट्रू (हा)

This will delete two random emojis of your guild:

```javascript
bot.command({
    name: 'deleteEmojis',
    code: `
  $deleteEmojis[$randomEmoji;$randomEmoji]
  `
});
```
