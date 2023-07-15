---
title: '$textSplit'
description: '$textSplit'
id: textSplit
---

`$textSplit`

## प्रोयोग

```php
$textSplit[text;sep?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                      |    चाहिए     |
| ----- | -------- | --------------------------------- |:------------:|
| text  | स्ट्रिंग | Query of arguments.               |     true     |
| sep?  | स्ट्रिंग | Separator for the text arguments. | असत्य (नहीं) |

## ट्रू (हा)

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