---
title: '$authorAvatar'
description: '$authorAvatar will return the profile picture of the command author.'
id: authorAvatar
---

`$authorAvatar` will return the profile picture of the command author.

## الاستخدام

```php
$authorAvatar[size?;dynamic?;format?]
```

## البارامترات

| Field    | النوع          | الديسكبربشين                                    | مطلوب |
| -------- | -------------- | ----------------------------------------------- |:-----:|
| size?    | string, number | The size of the image                           | false |
| dynamic? | boolean        | 1. **true** (default) <br /> 2. **false** | false |
| format?  | string         | The format of the returned image.               | false |

## مثال

This will return your profile picture:

```javascript
bot.command({
    name: 'authorAvatar',
    code: `
  $authorAvatar[2048;true;webp]
  `
});
```
