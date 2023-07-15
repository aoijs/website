---
title: '$stopTimeout'
description: '$stopTimeout will end/stop a timeout created by $setTimeout.'
id: stopTimeout
---

`$stopTimeout` will end/stop a timeout created by `$setTimeout`.

## प्रोयोग

```php
$stopTimeout[id]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन | चाहिए |
| ----- | -------- | ------------ |:-----:|
| id    | स्ट्रिंग | Timeout ID.  | true  |

## ट्रू (हा)

This will end a `$setTimeout` timeout:

```javascript
bot.command({
    name: "stopTimeout",
    code: `
    $stopTimeout[10029]
    `
});
```