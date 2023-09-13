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

| Field    | Type    | Description                                                                                                                     | Required |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- | :------: |
| variable | string  | Variable name.                                                                                                                  |   true   |
| id       | integer | User/guild/channel/message ID.                                                                                                  |   true   |
| type     | string  | Variable type <br /> 1. **global** <br /> 2. **user** <br /> 3. **guild** (default) <br /> 4. **channel** <br /> 5. **message** |   true   |
| option   | string  | Option to return <br /> 1. **top** <br /> 2. **value** <br /> 3. **tag** <br /> 4. **username**                                 |   true   |

## Example(s)

This will return the position of the current guild:

```javascript
bot.command({
  name: "getLeaderboardInfo",
  code: `
    $getLeaderboardInfo[Example;$guildID;guild;top]
    `,
});
```
