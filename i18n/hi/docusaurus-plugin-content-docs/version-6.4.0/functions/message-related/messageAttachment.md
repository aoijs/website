---
title: '$messageAttachment'
description: '$messageAttachment will return a message attachment depending on the given index.'
id: messageAttachment
---

`$messageAttachment` will return a message attachment depending on the given index.

## प्रोयोग

```php
$messageAttachment[index?]
```

## पैरामीटर्स

| फील्ड  | टाइप    | डिस्क्रिप्शन                                            |    चाहिए     |
| ------ | ------- | ------------------------------------------------------- |:------------:|
| index? | integer | The index of which message attachment will be returned. | असत्य (नहीं) |

## ट्रू (हा)

This will return your given attachment:

```javascript
bot.command({
    name: 'messageAttachment',
    code: `
  You had the following attachment in your message: $messageAttachment
  `
});
```
