---
title: '$useChannel'
description: '$useChannel will use the specified channel and execute all function inside of it instead.'
id: useChannel
---

`$useChannel` will use the specified channel and execute all function inside of it instead.

## प्रोयोग

```php
$useChannel[channelID]
```

## पैरामीटर्स

| फील्ड     | टाइप    | डिस्क्रिप्शन                    | चाहिए |
| --------- | ------- | ------------------------------- |:-----:|
| channelID | integer | Where to execute the functions. | true  |

## ट्रू (हा)

This will send an embed in the current channel:

```javascript
bot.command({
    name: "useChannel",
    code: `
    $description[Hello!]
    $useChannel[$channelID]
    `
});
```