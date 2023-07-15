---
title: '$stopTimeout'
description: '$stopTimeout will end/stop a timeout created by $setTimeout.'
id: stopTimeout
---

`$stopTimeout` will end/stop a timeout created by `$setTimeout`.

## الاستخدام

```php
$stopTimeout[id]
```

## البارامترات

| Field | النوع  | الديسكبربشين | مطلوب |
| ----- | ------ | ------------ |:-----:|
| id    | string | Timeout ID.  | true  |

## مثال

This will end a `$setTimeout` timeout:

```javascript
bot.command({
    name: "stopTimeout",
    code: `
    $stopTimeout[10029]
    `
});
```