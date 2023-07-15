---
title: '$forEachGuild'
description: '$forEachGuild will execute given awaited commands in every guild.'
id: forEachGuild
---

`$forEachGuild` will execute given awaited commands in every guild.

## प्रोयोग

```php
$forEachGuild[time;awaitData;...awaitedCmds;endCmd]
```

## पैरामीटर्स

| फील्ड          | टाइप     | डिस्क्रिप्शन                                              | चाहिए |
| -------------- | -------- | --------------------------------------------------------- |:-----:|
| time           | स्ट्रिंग | How long it takes between each guild to execute the next. | true  |
| awaitData      | object   | Awaited Data.                                             | true  |
| ...awaitedCmds | स्ट्रिंग | Awaited Commands to execute.                              | true  |
| endCmd?        | स्ट्रिंग | Awaited Command to execute when loop ends.                | true  |

## ट्रू (हा)

This will change the variable value of each guild to "test":

```javascript
bot.command({
    name: "forEachGuild",
    code: `
  $forEachGuild[2s;{"value": "test"};awaitedCommand;]
  `
});

bot.awaitedCommand({
    name: "awaitedCommand",
    code: `
  $setGuildVar[varname;$awaitData[value];$guildID]
  `
});
```