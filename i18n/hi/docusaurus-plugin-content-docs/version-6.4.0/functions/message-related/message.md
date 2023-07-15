---
title: '$message'
description: '$message will return given arguments of a message.'
id: message
---

`$message` will return given arguments of a message.

## प्रोयोग

```php
$message[index?]
```

## पैरामीटर्स

| फील्ड  | टाइप    | डिस्क्रिप्शन                                                                         |    चाहिए     |
| ------ | ------- | ------------------------------------------------------------------------------------ |:------------:|
| index? | integer | Which message argument will be returned, leave it empty to return the whole message. | असत्य (नहीं) |

## ट्रू (हा)

This will return your given message:

```javascript
bot.command({
    name: 'message',
    code: `
  You said: "$message"
  ` // [prefix]message Hello!
});
```
