---
title: '$writeFile'
description: '$writeFile will create a new file in the bot''s directory.'
id: writeFile
---

`$writeFile` will create a new file in the bot's directory.

## प्रोयोग

```php
$writeFile[path;text;encoding?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                            |    चाहिए     |
| -------- | -------- | --------------------------------------- |:------------:|
| path     | स्ट्रिंग | Where to create the file.               |     true     |
| text     | स्ट्रिंग | What the content of the file should be. |     true     |
| encoding | स्ट्रिंग | Text/File encoding.                     | असत्य (नहीं) |

## ट्रू (हा)

This will a file called "testing.txt" with the content of "Hello!":

```javascript
bot.command({
    name: "writeFile",
    code: `
    $writeFile[./testing.txt;Hello!;utf8]
    `
});
```