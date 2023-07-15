---
title: '$deleteEmoji'
description: '$deleteEmoji will delete a specific emoji.'
id: deleteEmoji
---

`$deleteEmoji` will delete a specific emoji.

## प्रोयोग

```php
$deleteEmoji[emoji]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                    | चाहिए |
| ----- | -------- | --------------------------------------------------------------- |:-----:|
| emoji | स्ट्रिंग | Emoji Name, ID or full form of the emoji which will be deleted. | true  |

## ट्रू (हा)

This will delete a random emoji of your guild:

```javascript
bot.command({
    name: 'deleteEmoji',
    code: `
  $deleteEmoji[$randomEmoji]
  `
});
```
