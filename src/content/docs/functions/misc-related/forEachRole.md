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

| Field                                       | Type                                                                                              | Description                                              | Required |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | :------: |
| time                                        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | How long it takes between each role to execute the next. |   true   |
| awaitData                                   | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| JavaScript/Reference/Global_Objects/Object) | Awaited Data.                                                                                     | true                                                     |
| ...awaitedCmds                              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Commands to execute.                             |   true   |
| endCmd                                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Command to execute when loop ends.               |   true   |
