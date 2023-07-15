---
title: '$getLeaderboardInfo'
description: '$getLeaderboardInfo will return information about a given variable sorted in a leaderboard.'
id: getLeaderboardInfo
---

`$getLeaderboardInfo` will return information about a given variable sorted in a leaderboard.

## प्रोयोग

```php
$getLeaderboardInfo[variable;id;type;option]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                                                                                                 | चाहिए |
| ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |:-----:|
| varname | स्ट्रिंग | Variable name.                                                                                                               | true  |
| id      | integer  | User/guild/channel/message ID.                                                                                               | true  |
| टाइप    | स्ट्रिंग | Variable type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** | true  |
| option  | स्ट्रिंग | Option to return <br /> 1. **top** (default) <br /> **value**                                                    | true  |

## ट्रू (हा)

This will return the position of the current guild:

```javascript
bot.command({
    name: "getLeaderboardInfo",
    code: `
    $getLeaderboardInfo[Example;$guildID;server;top]
    `
});
```