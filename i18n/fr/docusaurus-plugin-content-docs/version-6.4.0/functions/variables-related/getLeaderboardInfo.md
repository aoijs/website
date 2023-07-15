---
title: '$getLeaderboardInfo'
description: '$getLeaderboardInfo will return information about a given variable sorted in a leaderboard.'
id: getLeaderboardInfo
---

`$getLeaderboardInfo` will return information about a given variable sorted in a leaderboard.

## Usage

```php
$getLeaderboardInfo[variable;id;type;option]
```

## Parameters

| Field   | Type    | Description                                                                                                                  | Required |
| ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |:--------:|
| varname | string  | Variable name.                                                                                                               |   true   |
| id      | integer | User/guild/channel/message ID.                                                                                               |   true   |
| type    | string  | Variable type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** |   true   |
| option  | string  | Option to return <br /> 1. **top** (default) <br /> **value**                                                    |   true   |

## Example(s)

This will return the position of the current guild:

```javascript
bot.command({
    name: "getLeaderboardInfo",
    code: `
    $getLeaderboardInfo[Example;$guildID;server;top]
    `
});
```