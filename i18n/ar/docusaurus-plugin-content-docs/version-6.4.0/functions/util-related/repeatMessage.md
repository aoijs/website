---
title: '$repeatMessage'
description: '$repeatMessage will repeat the given text for given amount of times.'
id: repeatMessage
---

`$repeatMessage` will repeat the given text for given amount of times.

## الاستخدام

```php
$repeatMessage[time;text]
```

## البارامترات

| Field | النوع   | الديسكبربشين                                | مطلوب |
| ----- | ------- | ------------------------------------------- |:-----:|
| time  | Integer | The amount of times the text gets repeated. | true  |
| text  | string  | The text that will get repeated.            | true  |

## مثال

This will return `Hello` twenty times:

```javascript
bot.command({
    name: 'repeatMessage',
    code: `
  $repeatMessage[20;Hello ]
  `
});
```
