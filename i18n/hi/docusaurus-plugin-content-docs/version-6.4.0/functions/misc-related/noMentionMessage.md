---
title: '$noMentionMessage'
description: '$noMentionMessage will return the part of the message which contains no mention.'
id: noMentionMessage
---

`$noMentionMessage` will return the part of the message which contains no mention.

## प्रोयोग

```php
$noMentionMessage[args]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन      |    चाहिए     |
| ----- | -------- | ----------------- |:------------:|
| args? | स्ट्रिंग | Message position. | असत्य (नहीं) |

## ट्रू (हा)

```javascript
bot.command({
    name: "noMentionMessage",
    code: `
    $noMentionMessage[1]
    `
});
```