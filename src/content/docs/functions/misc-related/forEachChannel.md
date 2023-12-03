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

| Field                                       | Type                                                                                              | Description                                                 | Required |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | :------: |
| time                                        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | How long it takes between each channel to execute the next. |   true   |
| awaitData                                   | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| JavaScript/Reference/Global_Objects/Object) | Awaited Data.                                                                                     | true                                                        |
| ...awaitedCmds                              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Commands to execute.                                |   true   |
| endCmd                                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Command to execute when loop ends.                  |   true   |

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
