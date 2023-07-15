---
title: '$timeoutData'
description: '$timeoutData holds data for $setTimeout data parameters, this will be empty if used outside timeoutCommand codes.'
id: timeoutData
---

`$timeoutData` holds data for $setTimeout data parameters, this will be empty if used outside timeoutCommand codes.

## الاستخدام

```php
$timeoutData[option]
```

## البارامترات

| Field  | النوع  | الديسكبربشين              | مطلوب |
| ------ | ------ | ------------------------- |:-----:|
| option | string | Timeout Data option name. | true  |

## مثال

This will send "Hello!" after 10 seconds in the command execution channel:

```javascript
bot.command({
    name: "setTimeout",
    code: `
    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]
    `
});

bot.timeoutCommand({
    name: "timeoutCommand",
    code: `
    $channelSendMessage[$timeoutData[channelID];Hello, <@$timeoutData[authorID]>!]
    `
});
```