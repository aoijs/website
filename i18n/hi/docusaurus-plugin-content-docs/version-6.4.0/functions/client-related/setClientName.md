---
title: '$setClientName'
description: '$setClientName will change the clients'' Discord Username.'
id: setClientName
---

`$setClientName` will change the clients' Discord Username.

## प्रोयोग

```php
$setClientName[username]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन             | चाहिए |
| -------- | -------- | ------------------------ |:-----:|
| username | स्ट्रिंग | The new client username. | true  |

## ट्रू (हा)

This will change the client's username to the command author's username:

```javascript
bot.command({
    name: 'setClientName',
    code: `
   $setClientName[$username[$authorID]]`
});
```