---
title: $forEachUser
description: $forEachUser will execute awaited commands for user across all guilds.
id: forEachUser
---

`$forEachUser` will execute awaited commands for user across all guilds.

## Usage

```php
$forEachUser[time;awaitData;...awaitedCmds;endCmd]
```

## Parameters

| Field                                       | Type                                                                                              | Description                                                  | Required |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | :------: |
| time                                        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | How long it takes between each user to execute the next one. |   true   |
| awaitData                                   | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| JavaScript/Reference/Global_Objects/Object) | Awaited Data.                                                                                     | true                                                         |
| ...awaitedCmds                              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Commands to execute.                                 |   true   |
| endCmd                                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Command to execute when loop ends.                   |   true   |

## Example(s)

This will log every (cached) user in your console:

```javascript
client.command({
  name: "awaitData",
  code: `
  $forEachUser[1;{};returnUsers;]
  `
});

client.awaitedCommand({
  name: "returnUsers",
  code: `
  $log[ $authorID ]
  `
});
```
