---
title: $rawLeaderboard
description: $rawLeaderboard will return a leaderboard of the given type.
id: rawLeaderboard
---

`$rawLeaderboard` will return a leaderboard of the given type.

## Usage

```php
$rawLeaderboard[variable;order?;type?;custom?;list?;page?;table?]
```

## Parameters

| Field    | Type   | Description                                                                                               | Required |
| -------- | ------ | --------------------------------------------------------------------------------------------------------- | :------: |
| variable | string | Variable name.                                                                                            |   true   |
| type     | string | Variable type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel**      |   true   |
| order    | string | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descending) |   true   |
| custom?  | string | Formatting.                                                                                               |  false   |
| list?    | number | How many to list.                                                                                         |  false   |
| page?    | number | Which page to list.                                                                                       |  false   |
| table?   | string | Variable table.                                                                                           |  false   |

| Options     | Returns         |                                         |
| ----------- | --------------- | --------------------------------------- |
| **{top}**   | number          | Returns the position of the user.       |
| **{name}**  | string          | Returns the username.                   |
| **{tag}**   | string          | Returns the username and discriminator. |
| **{id}**    | integer         | Returns the user ID.                    |
| **{value}** | number, integer | Returns the variable value.             |

## Example(s)

This will return a leaderboard of the "Example" variable:

```javascript
bot.command({
  name: "rawLeaderboard",
  code: `
    $rawLeaderboard[Example;asc;globalUser;{top} - {username} - {value};10;1;main]
    `,
});
```
