---
title: '$repeatMessage'
description: '$repeatMessage will repeat the given text for given amount of times.'
id: repeatMessage
---

`$repeatMessage` will repeat the given text for given amount of times.

## प्रोयोग

```php
$repeatMessage[time;text]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                | चाहिए |
| ----- | -------- | ------------------------------------------- |:-----:|
| time  | integer  | The amount of times the text gets repeated. | true  |
| text  | स्ट्रिंग | The text that will get repeated.            | true  |

## ट्रू (हा)

This will return `Hello` twenty times:

```javascript
bot.command({
    name: 'repeatMessage',
    code: `
  $repeatMessage[20;Hello ]
  `
});
```
