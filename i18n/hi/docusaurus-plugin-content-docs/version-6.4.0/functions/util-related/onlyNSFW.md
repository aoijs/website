---
title: '$onlyNSFW'
description: '$onlyNSFW will check if the command was executed in a NSFW channel and return a error message if not.'
id: onlyNSFW
---

`$onlyNSFW` will check if the command was executed in a NSFW channel and return a error message if not.

## प्रोयोग

```php
$onlyNSFW[error?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                                         | चाहिए |
| ----- | -------- | -------------------------------------------------------------------- |:-----:|
| error | स्ट्रिंग | Error to return when the command was not executed in a NSFW channel. | true  |

## ट्रू (हा)

This will limit the command only to NSFW channels:

```javascript
bot.command({
    name: "onlyNSFW",
    code: `
    Ok.
    $onlyNSFW[You can't use that command here!]
    `
});
```