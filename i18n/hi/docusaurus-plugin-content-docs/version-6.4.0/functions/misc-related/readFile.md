---
title: '$readFile'
description: '$readFile will read a file''s content and return it.'
id: readFile
---

`$readFile` will read a file's content and return it.

## प्रोयोग

```php
$readFile[path]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन | चाहिए |
| ----- | -------- | ------------ |:-----:|
| path  | स्ट्रिंग | File path.   | true  |

## ट्रू (हा)

This will return your main file (index.js):

```javascript
bot.command({
    name: "readFile",
    code: `
    $readFile[./index.js]
    `
});
```