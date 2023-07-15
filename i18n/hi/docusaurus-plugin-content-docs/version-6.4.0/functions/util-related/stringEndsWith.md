---
title: '$stringEndsWith'
description: '$stringEndsWith will check if the given argument ends with something specific.'
id: stringEndsWith
---

`$stringEndsWith` will check if the given argument ends with something specific.

## प्रोयोग

```php
$stringEndsWith[text;check]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                           | चाहिए |
| ----- | -------- | ---------------------------------------------------------------------- |:-----:|
| text  | स्ट्रिंग | The text that will be checked.                                         | true  |
| check | स्ट्रिंग | The argument that will check if the text ends with something specific. | true  |

## ट्रू (हा)

This will return `true` as `aoi.js` ends with `js`:

```javascript
bot.command({
    name: 'stringEndsWith',
    code: `
  $stringEndsWith[aoi.js;js]
  `
});
```