---
title: '$setClientAvatar'
description: '$setClientAvatar will change the clients'' avatar.'
id: setClientAvatar
---

`$setClientAvatar` will change the clients' avatar.

## प्रोयोग

```php
$setClientAvatar[URL]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन        | चाहिए |
| ----- | -------- | ------------------- |:-----:|
| URL   | स्ट्रिंग | The new avatar URL. | true  |

## ट्रू (हा)

This will change the client's avatar to the command author's user avatar:

```javascript
bot.command({
    name: 'setClientAvatar',
    code: `
   $setClientAvatar[$userAvatar[$authorID]]`
});
```