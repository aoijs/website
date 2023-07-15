---
title: '$message'
description: '$message will return given arguments of a message.'
id: message
---

`$message` will return given arguments of a message.

## الاستخدام

```php
$message[index?]
```

## البارامترات

| Field  | النوع   | الديسكبربشين                                                                         | مطلوب |
| ------ | ------- | ------------------------------------------------------------------------------------ |:-----:|
| index? | Integer | Which message argument will be returned, leave it empty to return the whole message. | false |

## مثال

This will return your given message:

```javascript
bot.command({
    name: 'message',
    code: `
  You said: "$message"
  ` // [prefix]message Hello!
});
```
