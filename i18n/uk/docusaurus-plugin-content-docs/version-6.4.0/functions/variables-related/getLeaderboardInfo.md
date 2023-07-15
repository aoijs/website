---
title: '$getLeaderboardInfo'
description: '$getLeaderboardInfo will return information about a given variable sorted in a leaderboard.'
id: getLeaderboardInfo
---

`$getLeaderboardInfo` will return information about a given variable sorted in a leaderboard.

## Використання

```php
$getLeaderboardInfo[variable;id;type;option]
```

## Параметри

| Поле    | Тип     | Опис                                                                                                                         | Обов'язковий |
| ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |:------------:|
| varname | рядок   | Variable name.                                                                                                               |     так      |
| id      | integer | User/guild/channel/message ID.                                                                                               |     так      |
| тип     | рядок   | Variable type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** |     так      |
| option  | рядок   | Option to return <br /> 1. **top** (default) <br /> **value**                                                    |     так      |

## Приклад(и)

This will return the position of the current guild:

```javascript
bot.command({
    name: "getLeaderboardInfo",
    code: `
    $getLeaderboardInfo[Example;$guildID;server;top]
    `
});
```