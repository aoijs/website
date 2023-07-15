---
title: '$log'
description: '$log will log a given message in your bot''s console.'
id: log
---

`$log` will log a given message in your bot's console.

## प्रोयोग

```php
$log[content]
```

## पैरामीटर्स

| फील्ड   | टाइप           | डिस्क्रिप्शन                   | चाहिए |
| ------- | -------------- | ------------------------------ |:-----:|
| content | string, number | Content of the message to log. | true  |

## ट्रू (हा)

This will log "Aoi.js is great!" in your bot's console:

```javascript
bot.command({
    name: "log",
    code: `
    $log[Aoi.js is great!]
    `
});
```