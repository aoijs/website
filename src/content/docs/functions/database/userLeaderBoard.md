---
title: $userLeaderBoard
description: $userLeaderBoard will return a leaderboard of a user variable.
id: userLeaderBoard
---

`$userLeaderBoard` will return a leaderboard of a user variable.

## Usage

```php
$userLeaderBoard[guildID;variable;order?;custom?;list?;page?;table?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                                                               | Required |
| -------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | :------: |
| guildID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Guild ID.                                                                                                 |   true   |
| variable | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.                                                                                            |   true   |
| type?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descending) |  false   |
| custom?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Formatting.                                                                                               |  false   |
| list?    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | How many to list.                                                                                         |  false   |
| page?    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Which page to list.                                                                                       |  false   |
| table?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table.                                                                                           |  false   |

| Options          | Returns                                                                                           |                                         |
| ---------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **\{top\}**      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns the position of the user.       |
| **\{username\}** | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns the username.                   |
| **\{tag\}**      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns the username and discriminator. |
| **\{id\}**       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns the user ID.                    |
| **\{value\}**    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns the variable value.             |

## Example(s)

This will returns a leaderboard of the "Example" variable:

```javascript
client.command({
    name: "userLeaderBoard",
    code: `
    $userLeaderBoard[$guildID;Example;asc;{top} - {username} - {value};10;1;main]
    `
});
```
