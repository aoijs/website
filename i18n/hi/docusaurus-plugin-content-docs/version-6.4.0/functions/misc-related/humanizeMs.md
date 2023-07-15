---
title: '$humanizeMs'
description: '$humanizeMs will convert MS to human-readable time.'
id: humanizeMs
---

`$humanizeMs` will convert MS to human-readable time.

## प्रोयोग

```php
$humanizeMs[time]
```

## पैरामीटर्स

| फील्ड | टाइप   | डिस्क्रिप्शन | चाहिए |
| ----- | ------ | ------------ |:-----:|
| time  | number | Time in MS.  | true  |

## ट्रू (हा)

This will return `6mon 1w 4d 16h 34m` converted from `16782516189` MS:

```javascript
bot.command({
    name: "humanizeMs",
    code: `
    $humanizeMs[16782516189]
    `
});
```