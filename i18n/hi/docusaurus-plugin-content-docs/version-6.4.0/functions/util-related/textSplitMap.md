---
title: '$textSplitMap'
description: '$textSplitMap will create a loop over all values that are stored within $textSplit'
id: textSplitMap
---

`$textSplitMap` will create a loop over all values that are stored within $textSplit.

## प्रोयोग

```php
$textSplit[awaited]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                 | चाहिए |
| ------- | -------- | ---------------------------- |:-----:|
| awaited | स्ट्रिंग | Name of the awaited command. | true  |

## ट्रू (हा)

This will return the arguments within `$textSplit` and send all of them separately:

```javascript
bot.command({
    name: "textSplitMap",
    code: `
    $textSplitMap[devs]
    $textSplit[Ayaka,Leref,Ferel,Blurr;,]
    `
});

bot.awaitedCommand({
    name: "devs",
    code: `
    $message[1]
    `
});
```