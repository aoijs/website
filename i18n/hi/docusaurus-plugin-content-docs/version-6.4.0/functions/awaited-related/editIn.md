---
title: '$editIn'
description: '$editIn will edit a message after a given time.'
id: editIn
---

`$editIn` will edit a message after a given time.

## प्रोयोग

```php
$editIn[time;...content]
```

## पैरामीटर्स

| फील्ड   | टाइप           | डिस्क्रिप्शन                                    | चाहिए |
| ------- | -------------- | ----------------------------------------------- |:-----:|
| time    | string, number | After how much time the message will be edited. | true  |
| content | स्ट्रिंग       | What the new content of the message should be.  | true  |

## ट्रू (हा)

This will edit the sent message after five seconds:

```javascript
bot.command({
    name: 'editIn',
    code: `
  $editIn[5s;aoi.js is great, don't you agree?;Yes, I do!]
  I'll edit this message in 5 seconds!
  `
});
```
