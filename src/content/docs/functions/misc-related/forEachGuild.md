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

| Field          | Type   | Description                                               | Required |
| -------------- | ------ | --------------------------------------------------------- | :------: |
| time           | string | How long it takes between each guild to execute the next. |   true   |
| awaitData      | object | Awaited Data.                                             |   true   |
| ...awaitedCmds | string | Awaited Commands to execute.                              |   true   |
| endCmd?        | string | Awaited Command to execute when loop ends.                |   true   |

## Example(s)

This will change the variable value of each guild to "test":

```javascript
bot.command({
  name: "forEachGuild",
  code: `
  $forEachGuild[2s;{"value": "test"};awaitedCommand;]
  `,
});

bot.awaitedCommand({
  name: "awaitedCommand",
  code: `
  $setGuildVar[varname;$awaitData[value];$guildID]
  `,
});
```
