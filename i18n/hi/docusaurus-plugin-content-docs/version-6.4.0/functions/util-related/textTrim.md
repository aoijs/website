---
title: '$textTrim'
description: '$textTrim will remove all extra spaces, multiple spaces after one space, and replaces those with one single space.'
id: textTrim
---

`$textTrim` will remove all extra spaces, multiple spaces after one space, and replaces those with one single space.

## प्रोयोग

```php
$textTrim[text]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन            | चाहिए |
| ----- | -------- | ----------------------- |:-----:|
| text  | स्ट्रिंग | The text to be trimmed. | true  |

## ट्रू (हा)

This will remove any extra spaces of the given text, in this case it would return `Imagine a string package.`:

```javascript
bot.command({
    name: "textTrim",
    code: `
    $textTrim[      Imagine a string package      ]
    `
});
```