---
title: '$appendFile'
description: '$appendFile will add given text to a specific file.'
id: appendFile
---

`$appendFile` will add given text to a specific file.

## الاستخدام

```php
$appendFile[path;content;encode?]
```

## البارامترات

| Field   | النوع          | الديسكبربشين                                   | مطلوب |
| ------- | -------------- | ---------------------------------------------- |:-----:|
| path    | string         | File location.                                 | true  |
| content | string, number | Content to append to the file                  | true  |
| encode? | string         | Encode type <br /> 1. **utf8** (default) | false |

## مثال

This will add a comment to your main file:

```javascript
bot.command({
    name: 'appendFile',
    code: `
  $appendFile[./index.js;// Hello!]
  `
});
```