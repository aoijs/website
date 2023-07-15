---
title: '$wait'
description: '$wait will delay functions from executing for a given time.'
id: wait
---

`$wait` will delay functions from executing for a given time.

## प्रोयोग

```php
$wait[time]
```

## पैरामीटर्स

| फील्ड | टाइप           | डिस्क्रिप्शन                     | चाहिए |
| ----- | -------------- | -------------------------------- |:-----:|
| time  | string, number | How long to delay the execution. | true  |

## ट्रू (हा)

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