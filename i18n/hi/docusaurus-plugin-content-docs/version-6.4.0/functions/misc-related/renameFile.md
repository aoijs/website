---
title: '$renameFile'
description: '$renameFile will rename a file of your bot''s directory.'
id: renameFile
---

`$renameFile` will rename a file of your bot's directory.

## प्रोयोग

```php
$renameFile[oldFile;newFile]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन   | चाहिए |
| ------- | -------- | -------------- |:-----:|
| oldFile | स्ट्रिंग | Old file name. | true  |
| newFile | स्ट्रिंग | New file name. | true  |

## ट्रू (हा)

This will change your index.js to a index.txt file:

```javascript
bot.command({
    name: "renameFile",
    code: `
    $renameFile[./index.js;./index.txt]
    `
});
```