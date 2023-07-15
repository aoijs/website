---
title: '$parseTime'
description: '$parseTime will convert any human time to milliseconds.'
id: parseTime
---

`$parseTime` will convert any human time to milliseconds.

## प्रोयोग

```php
$parseTime[time]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                             | चाहिए |
| ----- | -------- | ---------------------------------------- |:-----:|
| time  | स्ट्रिंग | The time that will be converted to `ms`. | true  |

## ट्रू (हा)

This will convert `69 minutes` to milliseconds and return `4140000`:

```javascript
bot.command({
    name: 'parseTime',
    code: `
  $parseTime[69m]
  `
});
```

This will convert `1w 2d 20m` to milliseconds and return `778800000`:

```javascript
bot.command({
    name: 'parseTime',
    code: `
  $parseTime[1w 2d 20m]
  `
});
```
