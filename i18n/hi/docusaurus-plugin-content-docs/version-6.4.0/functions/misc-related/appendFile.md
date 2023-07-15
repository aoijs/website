---
title: '$appendFile'
description: '$appendFile will add given text to a specific file.'
id: appendFile
---

`$appendFile` will add given text to a specific file.

## प्रोयोग

```php
$appendFile[path;content;encode?]
```

## पैरामीटर्स

| फील्ड   | टाइप           | डिस्क्रिप्शन                                   |    चाहिए     |
| ------- | -------------- | ---------------------------------------------- |:------------:|
| path    | स्ट्रिंग       | File location.                                 |     true     |
| content | string, number | Content to append to the file                  |     true     |
| encode? | स्ट्रिंग       | Encode type <br /> 1. **utf8** (default) | असत्य (नहीं) |

## ट्रू (हा)

This will add a comment to your main file:

```javascript
bot.command({
    name: 'appendFile',
    code: `
  $appendFile[./index.js;// Hello!]
  `
});
```