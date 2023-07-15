---
title: '$useChannel'
description: '$useChannel will use the specified channel and execute all function inside of it instead.'
id: useChannel
---

`$useChannel` will use the specified channel and execute all function inside of it instead.

## الاستخدام

```php
$useChannel[channelID]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                    | مطلوب |
| --------- | ------- | ------------------------------- |:-----:|
| channelID | Integer | Where to execute the functions. | true  |

## مثال

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