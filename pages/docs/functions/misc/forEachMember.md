---
title: $forEachMember
description: $forEachMember will execute awaited commands for user within the current guild.
id: forEachMember
---

`$forEachMember` will execute awaited commands for user within the current guild.

## Usage

```php
$forEachMember[time;awaitData;...awaitedCmds;endCmd]
```

## Parameters

| Field                                       | Type                                                                                              | Description                                                | Required |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | :------: |
| time                                        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | How long it takes between each member to execute the next. |   true   |
| awaitData                                   | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Awaited Data.                                              |   true   |
| ...awaitedCmds                              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited Commands to execute.                               |   true   |
| endCmd?                                     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Awaited command to execute when the loop ends.             |   false  |

## Example(s)

```javascript
client.command({
  name: "awaitData",
  code: `
  $forEachMember[1s;{ "members": "$membersCount" };returnMembers;]
  `
});

client.awaitedCommand({
  name: "returnMembers",
  code: `
  $log[ $authorID , is one out of $awaitData[members] members ]
  `
});
```
