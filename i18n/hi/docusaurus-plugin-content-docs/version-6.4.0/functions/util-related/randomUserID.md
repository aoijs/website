---
title: '$randomUserID'
description: '$randomUserID will return a random username.'
id: randomUserID
---

`$randomUserID` will return a random username.

## प्रोयोग

```php
$randomUserID[global/guildID?]
```

## पैरामीटर्स

| फील्ड           | टाइप     | डिस्क्रिप्शन                                                             |    चाहिए     |
| --------------- | -------- | ------------------------------------------------------------------------ |:------------:|
| global/guildID? | स्ट्रिंग | Return a random user out of all guild or out of one specific guild only. | असत्य (नहीं) |

## ट्रू (हा)

This will return a random user id:

```javascript
bot.command({
    name: 'randomUserID',
    code: `
  $randomUserID[global]
  `
});
```
