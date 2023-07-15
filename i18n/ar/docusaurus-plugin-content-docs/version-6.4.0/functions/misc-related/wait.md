---
title: '$wait'
description: '$wait will delay functions from executing for a given time.'
id: wait
---

`$wait` will delay functions from executing for a given time.

## الاستخدام

```php
$wait[time]
```

## البارامترات

| Field | النوع          | الديسكبربشين                     | مطلوب |
| ----- | -------------- | -------------------------------- |:-----:|
| time  | string, number | How long to delay the execution. | true  |

## مثال

This will send an embed delayed:

```javascript
bot.command({
    name: "wait",
    code: `
    $description[Hello!]
    $wait[5s]
    $sendMessage[Oh, what's that?]
    `
});
```