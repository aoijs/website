---
title: '$textSplit'
description: '$textSplit'
id: textSplit
---

`$textSplit`

## الاستخدام

```php
$textSplit[text;sep?]
```

## البارامترات

| Field | النوع  | الديسكبربشين                      | مطلوب |
| ----- | ------ | --------------------------------- |:-----:|
| text  | string | Query of arguments.               | true  |
| sep?  | string | Separator for the text arguments. | false |

## مثال

This will return `hello, how are you`:

```javascript
bot.command({
    name: 'textSplit',
    code: `
  $splitText[1] $splitText[3] $splitText[6] $splitText[7]
  $textSplit[hello,__blurr__how__ayaka__leref__are__you;__]
  `
});
```