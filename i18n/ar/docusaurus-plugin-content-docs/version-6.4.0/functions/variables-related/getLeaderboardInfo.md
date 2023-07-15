---
title: '$getLeaderboardInfo'
description: '$getLeaderboardInfo will return information about a given variable sorted in a leaderboard.'
id: getLeaderboardInfo
---

`$getLeaderboardInfo` will return information about a given variable sorted in a leaderboard.

## الاستخدام

```php
$getLeaderboardInfo[variable;id;type;option]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                                                                                                                 | مطلوب |
| ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |:-----:|
| varname | string  | Variable name.                                                                                                               | true  |
| id      | Integer | User/guild/channel/message ID.                                                                                               | true  |
| type    | string  | Variable type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** | true  |
| option  | string  | Option to return <br /> 1. **top** (default) <br /> **value**                                                    | true  |

## مثال

This will return the position of the current guild:

```javascript
bot.command({
    name: "getLeaderboardInfo",
    code: `
    $getLeaderboardInfo[Example;$guildID;server;top]
    `
});
```