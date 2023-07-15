---
title: '$rawLeaderboard'
description: '$rawLeaderboard will return a leaderboard of the given type.'
id: rawLeaderboard
---

`$rawLeaderboard` will return a leaderboard of the given type.

## प्रोयोग

```php
$rawLeaderboard[variable;order?;type?;custom?;list?;page?;table?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                                                                 |    चाहिए     |
| -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |:------------:|
| variable | स्ट्रिंग | Variable name.                                                                                                               |     true     |
| टाइप     | स्ट्रिंग | Variable type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** |     true     |
| order    | स्ट्रिंग | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descending)        |     true     |
| custom?  | स्ट्रिंग | Formatting.                                                                                                                  | असत्य (नहीं) |
| list?    | number   | How many to list.                                                                                                            | असत्य (नहीं) |
| page?    | number   | Which page to list.                                                                                                          | असत्य (नहीं) |
| table?   | स्ट्रिंग | Variable table.                                                                                                              | असत्य (नहीं) |

| Options     | Returns         |                                         |
| ----------- | --------------- | --------------------------------------- |
| **{top}**   | number          | Returns the position of the user.       |
| **{name}**  | स्ट्रिंग        | Returns the username.                   |
| **{tag}**   | स्ट्रिंग        | Returns the username and discriminator. |
| **{id}**    | integer         | Returns the user ID.                    |
| **{value}** | number, integer | Returns the variable value.             |

## ट्रू (हा)

This will return a leaderboard of the "Example" variable:

```javascript
bot.command({
    name: "rawLeaderboard",
    code: `
    $rawLeaderboard[Example;asc;globalUser;{top} - {username} - {value};10;1;main]
    `
});
```