---
title: '$forEachChannel'
description: '$forEachChannel will execute awaited commands in every channel of every guild.'
id: forEachChannel
---

`$forEachChannel` will execute awaited commands in every channel of every guild.

## प्रोयोग

```php
$forEachChannel[time;awaitData;...awaitedCmds;endCmd]
```

## पैरामीटर्स

| फील्ड          | टाइप     | डिस्क्रिप्शन                                                | चाहिए |
| -------------- | -------- | ----------------------------------------------------------- |:-----:|
| time           | स्ट्रिंग | How long it takes between each channel to execute the next. | true  |
| awaitData      | object   | Awaited Data.                                               | true  |
| ...awaitedCmds | स्ट्रिंग | Awaited Commands to execute.                                | true  |
| endCmd         | स्ट्रिंग | Awaited Command to execute when loop ends.                  | true  |

## ट्रू (हा)

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