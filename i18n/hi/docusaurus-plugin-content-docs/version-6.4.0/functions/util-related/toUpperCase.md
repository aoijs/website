---
title: '$toUpperCase'
description: '$toUpperCase will change the given text from lowercase to uppercase.'
id: toUpperCase
---

`$toUpperCase` will change the given text from lowercase to uppercase.

## प्रोयोग

```php
$toUpperCase[text]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                     | चाहिए |
| ----- | -------- | -------------------------------- |:-----:|
| text  | स्ट्रिंग | The text to change to uppercase. | true  |

## ट्रू (हा)

This will everything given to uppercase, in this case it would return `THIS IS AN EXAMPLE`:

```javascript
bot.command({
    name: "toUpperCase",
    code: `
    $toUpperCase[this is an example]
    `
});
```