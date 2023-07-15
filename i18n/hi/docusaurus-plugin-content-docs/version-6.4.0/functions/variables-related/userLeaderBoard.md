---
title: '$userLeaderBoard'
description: '$userLeaderBoard will return a leaderboard of a user variable.'
id: userLeaderBoard
---

`$userLeaderBoard` will return a leaderboard of a user variable.

## प्रोयोग

```php
$userLeaderBoard[guildID;variable;order?;custom?;list?;page?;table?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                                                          |    चाहिए     |
| -------- | -------- | --------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID  | integer  | Guild ID.                                                                                                             |     true     |
| variable | स्ट्रिंग | Variable name.                                                                                                        |     true     |
| टाइप?    | स्ट्रिंग | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descending) | असत्य (नहीं) |
| custom?  | स्ट्रिंग | Formatting.                                                                                                           | असत्य (नहीं) |
| list?    | number   | How many to list.                                                                                                     | असत्य (नहीं) |
| page?    | number   | Which page to list.                                                                                                   | असत्य (नहीं) |
| table?   | स्ट्रिंग | Variable table.                                                                                                       | असत्य (नहीं) |

| Options        | Returns         |                                         |
| -------------- | --------------- | --------------------------------------- |
| **{top}**      | number          | Returns the position of the user.       |
| **{username}** | स्ट्रिंग        | Returns the username.                   |
| **{tag}**      | स्ट्रिंग        | Returns the username and discriminator. |
| **{id}**       | integer         | Returns the user ID.                    |
| **{value}**    | number, integer | Returns the variable value.             |

## ट्रू (हा)

This will returns a leaderboard of the "Example" variable:

```javascript
bot.command({
    name: "userLeaderBoard",
    code: `
    $userLeaderBoard[$guildID;Example;asc;{top} - {username} - {value};10;1;main]
    `
});
```
