---
title: '$noEscapingMessage'
description: '$noEscapingMessage will return the non escaped message.'
id: noEscapingMessage
---

`$noEscapingMessage` will return the non escaped message.

## प्रोयोग

```php
$noEscapingMessage[args]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन      |    चाहिए     |
| ----- | -------- | ----------------- |:------------:|
| args? | स्ट्रिंग | Message position. | असत्य (नहीं) |

## ट्रू (हा)

```javascript
bot.command({
    name: "noEscapingMessage",
    code: `
    $noEscapingMessage[1]
    `
});
```