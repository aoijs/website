---
title: $forEachGuildChannel
description: $forEachGuildChannel will execute awaited commands in every channel of the current guild.
id: forEachGuildChannel
---

`$forEachGuildChannel` will execute awaited commands in every channel of the current guild.

## Usage

```aoi
$forEachGuildChannel[time;awaitData;...awaitedCmds;endCmd]
```

## Parameters

| Field          | Type                                                                                              | Description                                                 | Required |
| -------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | :------: |
| time           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | How long it takes between each channel to execute the next. |   true   |
| awaitData      | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Awaited Data.                                               |   true   |
| ...awaitedCmds | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Commands to execute.                                |   true   |
| endCmd?        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Command to execute when the loop ends.              |  false   |

## Example(s)

This will change the variable value of each guild channel to "test":

```javascript
client.command({
    name: "forEachGuildChannel",
    code: `
  $forEachGuildChannel[2s;{"value": "test"};awaitedCommand;]
  `
});

client.awaitedCommand({
    name: "awaitedCommand",
    code: `
  $setChannelVar[varname;$awaitData[value];$channelID]
  `
});
```
