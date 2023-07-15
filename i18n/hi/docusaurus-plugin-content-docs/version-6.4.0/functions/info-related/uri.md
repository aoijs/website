---
title: '$uri'
description: '$uri will encode or decode an URL.'
id: uri
---

`$uri` will encode or decode an URL.

## प्रोयोग

```php
$uri[text;type?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                                                    |    चाहिए     |
| ----- | -------- | ----------------------------------------------------------------------------------------------- |:------------:|
| text  | स्ट्रिंग | Text to encode/decode.                                                                          |     true     |
| टाइप? | स्ट्रिंग | What to do with the given text. <br /> 1. **encode** (default) <br /> 2. **decode** | असत्य (नहीं) |

## ट्रू (हा)

This will encode a given text:

```javascript
bot.command({
    name: 'encode',
    code: `
  $uri[aoi.js is great :);encode]
  `
});
```

This will decode a given text:

```javascript
bot.command({
    name: 'decode',
    code: `
  $uri[aoi.js%20is%20great%20%3A);decode]
  `
});
```
