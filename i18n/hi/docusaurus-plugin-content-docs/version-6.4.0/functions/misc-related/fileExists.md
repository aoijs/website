---
title: '$fileExists'
description: '$fileExists will check if a given file exists.'
id: fileExists
---

`$fileExists` will check if a given file exists.

## प्रोयोग

```php
$fileExists[path]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन | चाहिए |
| ----- | -------- | ------------ |:-----:|
| path  | स्ट्रिंग | File path.   | true  |

## ट्रू (हा)

This will check if a file called `index.js` exists in your directory:

```javascript
bot.command({
    name: "fileExists",
    code: `
  $fileExists[./index.js]
  `
});
```