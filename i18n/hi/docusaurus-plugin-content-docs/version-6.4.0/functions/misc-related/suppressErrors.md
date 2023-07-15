---
title: '$suppressErrors'
description: '$suppressErrors will suppress aoi.js function errors.'
id: suppressErrors
---

`$suppressErrors` will suppress aoi.js function errors.

## प्रोयोग

```php
$suppressErrors[errorMsg?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन             |    चाहिए     |
| -------- | -------- | ------------------------ |:------------:|
| errorMsg | स्ट्रिंग | Error message to return. | असत्य (नहीं) |

## ट्रू (हा)

This will suppress all errors of your code and return the pre-defined error message instead:

```javascript
bot.command({
    name: "suppressErrors",
    code: `
    $description
    $suppressErrors[Something went wrong!]
    ` // Intentional invalid usage of $description
});
```