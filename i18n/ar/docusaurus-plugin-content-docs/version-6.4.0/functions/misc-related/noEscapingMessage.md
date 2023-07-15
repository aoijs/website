---
title: '$noEscapingMessage'
description: '$noEscapingMessage will return the non escaped message.'
id: noEscapingMessage
---

`$noEscapingMessage` will return the non escaped message.

## الاستخدام

```php
$noEscapingMessage[args]
```

## البارامترات

| Field | النوع  | الديسكبربشين      | مطلوب |
| ----- | ------ | ----------------- |:-----:|
| args? | string | Message position. | false |

## مثال

```javascript
bot.command({
    name: "noEscapingMessage",
    code: `
    $noEscapingMessage[1]
    `
});
```