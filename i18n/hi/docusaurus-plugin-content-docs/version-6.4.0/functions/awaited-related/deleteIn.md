---
title: '$deleteIn'
description: '$deleteIn will delete a message after a given time.'
id: deleteIn
---

`$deleteIn` will delete a message after a given time.

## प्रोयोग

```php
$deleteIn[time]
```

## पैरामीटर्स

| फील्ड | टाइप           | डिस्क्रिप्शन                                     | चाहिए |
| ----- | -------------- | ------------------------------------------------ |:-----:|
| time  | string, number | After how much time the message will be deleted. | true  |

## ट्रू (हा)

This will delete the sent message after five seconds:

```javascript
bot.command({
    name: 'deleteIn',
    code: `
  $deleteIn[5s]
  I'll delete this message in 5 seconds!
  `
});
```
