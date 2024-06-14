---
title: $getLeaderboardInfo
description: $getLeaderboardInfo will return information about a given variable sorted in a leaderboard.
id: getLeaderboardInfo
---

`$getLeaderboardInfo` will return information about a given variable sorted in a leaderboard.

## Usage

```aoi
$getLeaderboardInfo[variable;id;type;option;table?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                                                                  | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | :------: |
| variable | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.                                                                                               |   true   |
| id       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | User/guild/channel/message ID.                                                                               |   true   |
| type     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable type <br /> 1. **global** <br /> 2. **guild** (default) <br /> 3. **channel** <br /> 4. **message** |   true   |
| option   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to return <br /> 1. **top** <br /> 2. **value** <br /> 3. **tag** <br /> 4. **username**              |   true   |
| table?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The database table to search in.                                                                             |  false   |

## Example(s)

This will return the position of the current guild:

```javascript
client.command({
    name: "getLeaderboardInfo",
    code: `
    $getLeaderboardInfo[Example;$authorId;guild;top]
    `
});
```
