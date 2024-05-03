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

| Field    | Type                                                                                              | Description                                                                                               | Required |
| -------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | :------: |
| variable | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.                                                                                            |   true   |
| type     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel**      |   true   |
| order    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descending) |   true   |
| custom?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Formatting.                                                                                               |  false   |
| list?    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | How many to list.                                                                                         |  false   |
| page?    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Which page to list.                                                                                       |  false   |
| table?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable table.                                                                                           |  false   |

| Options       | Returns                                                                                           |                                         |
| ------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **\{top\}**   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns the position of the user.       |
| **\{name\}**  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns the username.                   |
| **\{tag\}**   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns the username and discriminator. |
| **\{id\}**    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns the user ID.                    |
| **\{value\}** | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Returns the variable value.             |

## Example(s)

This will return a leaderboard of the "Example" variable:

```javascript
client.command({
    name: "rawLeaderboard",
    code: `
    $rawLeaderboard[Example;asc;globalUser;{top} - {username} - {value};10;1;main]
    `
});
```
