---
title: $forEachGuildChannel
description: $forEachGuildChannel will execute awaited commands in every channel of the current guild.
id: forEachGuildChannel
---

`$forEachGuildChannel` will execute awaited commands in every channel of the current guild.

## Usage

```php
$forEachGuildChannel[time;awaitData;...awaitedCmds;endCmd]
```

## Parameters

| Field          | Type   | Description                                                 | Required |
| -------------- | ------ | ----------------------------------------------------------- | :------: |
| time           | string | How long it takes between each channel to execute the next. |   true   |
| awaitData      | object | Awaited Data.                                               |   true   |
| ...awaitedCmds | string | Awaited Commands to execute.                                |   true   |
| endCmd         | string | Awaited Command to execute when loop ends.                  |   true   |

## Example(s)

This will change the variable value of each guild channel to "test":

```javascript
bot.command({
  name: "forEachGuildChannel",
  code: `
  $forEachGuildChannel[2s;{"value": "test"};awaitedCommand;]
  `,
});

bot.awaitedCommand({
  name: "awaitedCommand",
  code: `
  $setChannelVar[varname;$awaitData[value];$channelID]
  `,
});
```
