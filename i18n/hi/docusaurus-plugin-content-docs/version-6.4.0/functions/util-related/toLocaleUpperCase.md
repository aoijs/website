---
title: '$toLocaleUpperCase'
description: '$toLocaleUpperCase will change the first character of every word to uppercase.'
id: toLocaleUpperCase
---

`$toLocaleUpperCase` will change the first character of every word to uppercase.

## प्रोयोग

```php
$toLocaleUpperCase[text]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                            | चाहिए |
| ----- | -------- | --------------------------------------- |:-----:|
| text  | स्ट्रिंग | The text to change to locale uppercase. | true  |

## ट्रू (हा)

This will change every first character of a word to uppercase, in this case it would return `Hello, I'm Happy.`:

```javascript
bot.command({
    name: "toLocaleUpperCase",
    code: `
    $toLocaleUpperCase[hello, i'm happy.]
    `
});
```