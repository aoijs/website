---
title: '$deleteIn'
description: '$deleteIn will delete a message after a given time.'
id: deleteIn
---

`$deleteIn` will delete a message after a given time.

## الاستخدام

```php
$deleteIn[time]
```

## البارامترات

| Field | النوع          | الديسكبربشين                                     | مطلوب |
| ----- | -------------- | ------------------------------------------------ |:-----:|
| time  | string, number | After how much time the message will be deleted. | true  |

## مثال

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
