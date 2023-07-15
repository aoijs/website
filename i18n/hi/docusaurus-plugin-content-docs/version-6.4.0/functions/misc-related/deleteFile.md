---
title: '$deleteFile'
description: '$deleteFile will delete a given file.'
id: deleteFile
---

`$deleteFile` will delete a given file.

## प्रोयोग

```php
$deleteFile[path]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन | चाहिए |
| ----- | -------- | ------------ |:-----:|
| path  | स्ट्रिंग | File path.   | true  |

## ट्रू (हा)

This will delete your `index.js` (don't actually do that):

```javascript
bot.command({
    name: "deleteFile",
    code: `
  $deleteFile[./index.js]
  `
});
```