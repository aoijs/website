---
title: '$forEachChannel'
description: '$forEachChannel will execute awaited commands in every channel of every guild.'
id: forEachChannel
---

`$forEachChannel` will execute awaited commands in every channel of every guild.

## الاستخدام

```php
$forEachChannel[time;awaitData;...awaitedCmds;endCmd]
```

## البارامترات

| Field          | النوع  | الديسكبربشين                                                | مطلوب |
| -------------- | ------ | ----------------------------------------------------------- |:-----:|
| time           | string | How long it takes between each channel to execute the next. | true  |
| awaitData      | object | Awaited Data.                                               | true  |
| ...awaitedCmds | string | Awaited Commands to execute.                                | true  |
| endCmd         | string | Awaited Command to execute when loop ends.                  | true  |

## مثال

This will change the variable value of each channel to "test":

```javascript
bot.command({
    name: "forEachChannel",
    code: `
  $forEachChannel[2s;{"value": "test"};awaitedCommand;]
  `
});

bot.awaitedCommand({
    name: "awaitedCommand",
    code: `
  $setChannelVar[varname;$awaitData[value];$channelID]
  `
});
```