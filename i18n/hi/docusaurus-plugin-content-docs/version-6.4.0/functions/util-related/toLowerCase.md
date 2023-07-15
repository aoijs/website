---
title: '$toLowerCase'
description: '$toLowerCase will change the given text from uppercase to lowercase.'
id: toLowerCase
---

`$toLowerCase` will change the given text from uppercase to lowercase.

## प्रोयोग

```php
$toLowerCase[text]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                     | चाहिए |
| ----- | -------- | -------------------------------- |:-----:|
| text  | स्ट्रिंग | The text to change to lowercase. | true  |

## ट्रू (हा)

This will everything given to lowercase, in this case it would return `aoi.js is great.`:

```javascript
bot.command({
    name: "toLowerCase",
    code: `
    $toLowerCase[AOI.JS IS GREAT.]
    `
});
```