---
title: '$nonEscape'
description: '$nonEscape will stop escaping special characters.'
id: nonEscape
---

`$nonEscape` will stop escaping special characters.

## प्रोयोग

```php
$nonEscape[message]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                       | चाहिए |
| ------- | -------- | ---------------------------------- | ----- |
| message | स्ट्रिंग | Text you don't want to be escaped. | true  |

## ट्रू (हा)

This will stop from escaping certain characters:

```javascript
bot.command({
    name: 'nonEscape',
    code: `
  $nonEscape[Hello [;)]]
  `
});
```
