---
title: '$guildLeaderboard'
description: '$guildLeaderboard will return a leaderboard of a guild variable.'
id: guildLeaderboard
---

`$guildLeaderboard` will return a leaderboard of a guild variable.

## Usage

```php
$guildLeaderboard[variable;type?;custom?;list?;page?;table?]
```

## Parameters

| Field    | Type   | Description                                                                                                           | Required |
| -------- | ------ | --------------------------------------------------------------------------------------------------------------------- |:--------:|
| variable | string | Variable name.                                                                                                        |   true   |
| type     | string | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descending) |  false   |
| custom?  | string | Formatting.                                                                                                           |  false   |
| list?    | number | How many to list.                                                                                                     |  false   |
| page?    | number | Which page to list.                                                                                                   |  false   |
| table?   | string | Variable table.                                                                                                       |  false   |

| Options     | Returns         |                                         |
| ----------- | --------------- | --------------------------------------- |
| **{top}**   | number          | Returns the user position of the guild. |
| **{name}**  | string          | Returns the user name.                  |
| **{id}**    | integer         | Returns the guild ID.                   |
| **{value}** | number, integer | Returns the variable value.             |

## Example(s)

This will returns a leaderboard of the "Example" variable:

```javascript
bot.command({
    name: "guildLeaderboard",
    code: `
    $guildLeaderboard[Example;asc;{top} - {name} - {value};10;1;main]
    `
});
```
