---
title: $forEachRole
description: $forEachRole will execute awaited commands for every role in a given guild.
id: forEachRole
---

`$forEachRole` will execute awaited commands for every role in a given guild.

## Usage

```php
$forEachRole[guildID;time;awaitData;...awaitedCmds;endCmd]
```

## Parameters

| Field          | Type   | Description                                              | Required |
| -------------- | ------ | -------------------------------------------------------- | :------: |
| time           | string | How long it takes between each role to execute the next. |   true   |
| awaitData      | object | Awaited Data.                                            |   true   |
| ...awaitedCmds | string | Awaited Commands to execute.                             |   true   |
| endCmd         | string | Awaited Command to execute when loop ends.               |   true   |
