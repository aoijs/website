---
title: $forEachGuild
description: $forEachGuild will execute given awaited commands in every guild.
id: forEachGuild
---

`$forEachGuild` will execute given awaited commands in every guild.

## Usage

```php
$forEachGuild[time;awaitData;...awaitedCmds;endCmd]
```

## Parameters

| Field                                       | Type                                                                                              | Description                                               | Required |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | :------: |
| time                                        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | How long it takes between each guild to execute the next. |   true   |
| awaitData                                   | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| JavaScript/Reference/Global_Objects/Object) | Awaited Data.                                                                                     | true                                                      |
| ...awaitedCmds                              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Commands to execute.                              |   true   |
| endCmd?                                     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Command to execute when loop ends.                |   true   |

## Example(s)

This will change the variable value of each guild to "test":

```javascript
client.command({
  name: "forEachGuild",
  code: `
  $forEachGuild[2s;{"value": "test"};awaitedCommand;]
  `
});

client.awaitedCommand({
  name: "awaitedCommand",
  code: `
  $setGuildVar[varname;$awaitData[value];$guildID]
  `
});
```
