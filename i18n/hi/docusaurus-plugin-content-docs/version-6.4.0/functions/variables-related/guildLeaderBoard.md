---
title: '$guildLeaderboard'
description: '$guildLeaderboard will return a leaderboard of a guild variable.'
id: guildLeaderboard
---

`$guildLeaderboard` will return a leaderboard of a guild variable.

## प्रोयोग

```php
$guildLeaderboard[variable;type?;custom?;list?;page?;table?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                                                          |    चाहिए     |
| -------- | -------- | --------------------------------------------------------------------------------------------------------------------- |:------------:|
| variable | स्ट्रिंग | Variable name.                                                                                                        |     true     |
| टाइप     | स्ट्रिंग | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descending) | असत्य (नहीं) |
| custom?  | स्ट्रिंग | Formatting.                                                                                                           | असत्य (नहीं) |
| list?    | number   | How many to list.                                                                                                     | असत्य (नहीं) |
| page?    | number   | Which page to list.                                                                                                   | असत्य (नहीं) |
| table?   | स्ट्रिंग | Variable table.                                                                                                       | असत्य (नहीं) |

| Options     | Returns         |                                         |
| ----------- | --------------- | --------------------------------------- |
| **{top}**   | number          | Returns the user position of the guild. |
| **{name}**  | स्ट्रिंग        | Returns the user name.                  |
| **{id}**    | integer         | Returns the guild ID.                   |
| **{value}** | number, integer | Returns the variable value.             |

## ट्रू (हा)

This will returns a leaderboard of the "Example" variable:

```javascript
bot.command({
    name: "guildLeaderboard",
    code: `
    $guildLeaderboard[Example;asc;{top} - {name} - {value};10;1;main]
    `
});
```
