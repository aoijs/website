---
title: '$stringStartsWith'
description: '$stringStartsWith will check if the given argument starts with something specific.'
id: stringStartsWith
---

`$stringStartsWith` will check if the given argument starts with something specific.

## प्रोयोग

```php
$stringStartsWith[text;check]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                             | चाहिए |
| ----- | -------- | ------------------------------------------------------------------------ |:-----:|
| text  | स्ट्रिंग | The text that will be checked.                                           | true  |
| check | स्ट्रिंग | The argument that will check if the text starts with something specific. | true  |

## ट्रू (हा)

This will return `true` as `aoi.js` starts with `aoi`:

```javascript
bot.command({
    name: 'stringStartsWith',
    code: `
  $stringStartsWith[aoi.js;aoi]
  `
});
```