---
title: $forEachChannel
description: $forEachChannel will execute awaited commands in every channel of every guild.
id: forEachChannel
---

`$forEachChannel` will execute awaited commands in every channel of every guild.

## Usage

```php
$forEachChannel[time;awaitData;...awaitedCmds;endCmd]
```

## Parameters

| Field          | Type   | Description                                                 | Required |
| -------------- | ------ | ----------------------------------------------------------- | :------: |
| time           | string | How long it takes between each channel to execute the next. |   true   |
| awaitData      | object | Awaited Data.                                               |   true   |
| ...awaitedCmds | string | Awaited Commands to execute.                                |   true   |
| endCmd         | string | Awaited Command to execute when loop ends.                  |   true   |

## Example(s)

This will change the variable value of each channel to "test":

```javascript
client.command({
  name: "forEachChannel",
  code: `
  $forEachChannel[2s;{"value": "test"};awaitedCommand;]
  `
});

client.awaitedCommand({
  name: "awaitedCommand",
  code: `
  $setChannelVar[varname;$awaitData[value];$channelID]
  `
});
```
