---
title: $getLeaderboardInfo
description: $getLeaderboardInfo will return information about a given variable sorted in a leaderboard.
id: getLeaderboardInfo
---

`$getLeaderboardInfo` will return information about a given variable sorted in a leaderboard.

## Usage

```php
$getLeaderboardInfo[variable;id;type;option]
```

## Parameters

| Field    | Type                                                                                              | Description                                                                                                  | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | :------: |
| variable | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable name.                                                                                               |   true   |
| id       | integer                                                                                           | User/guild/channel/message ID.                                                                               |   true   |
| type     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Variable type <br /> 1. **global** <br /> 2. **guild** (default) <br /> 3. **channel** <br /> 4. **message** |   true   |
| option   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to return <br /> 1. **top** <br /> 2. **value** <br /> 3. **tag** <br /> 4. **username**              |   true   |

## Example(s)

This will return the position of the current guild:

```javascript
client.command({
  name: "getLeaderboardInfo",
  code: `
    $getLeaderboardInfo[Example;$authorId;guild;top]
    `,
});
```
