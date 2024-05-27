---
title: $guildLeaderboard
description: $guildLeaderboard will return a leaderboard of a guild variable.
id: guildLeaderboard
---

`$guildLeaderboard` will return a leaderboard of a guild variable.

## Usage

```aoi
$guildLeaderboard[variable;type?;custom?;list?;page?;table?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                                                               | Required |
| -------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | :------: |
| variable | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.                                                                                            |   true   |
| type     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descending) |  false   |
| custom?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Formatting.                                                                                               |  false   |
| list?    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | How many to list.                                                                                         |  false   |
| page?    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Which page to list.                                                                                       |  false   |
| table?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table.                                                                                           |  false   |

| Options       | Returns                                                                                           |                                         |
| ------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **\{top\}**   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns the user position of the guild. |
| **\{name\}**  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns the user name.                  |
| **\{id\}**    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns the guild ID.                   |
| **\{value\}** | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns the variable value.             |

## Example(s)

This will returns a leaderboard of the "Example" variable:

```javascript
client.command({
    name: "guildLeaderboard",
    code: `
    $guildLeaderboard[Example;asc;{top} - {name} - {value};10;1;main]
    `
});
```
