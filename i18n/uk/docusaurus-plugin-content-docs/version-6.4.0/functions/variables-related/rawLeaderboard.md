---
title: '$rawLeaderboard'
description: '$rawLeaderboard will return a leaderboard of the given type.'
id: rawLeaderboard
---

`$rawLeaderboard` will return a leaderboard of the given type.

## Використання

```php
$rawLeaderboard[variable;order?;type?;custom?;list?;page?;table?]
```

## Параметри

| Поле     | Тип    | Опис                                                                                                                         | Обов'язковий |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |:------------:|
| variable | рядок  | Variable name.                                                                                                               |     так      |
| тип      | рядок  | Variable type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** |     так      |
| order    | рядок  | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descending)        |     так      |
| custom?  | рядок  | Formatting.                                                                                                                  |      ні      |
| list?    | number | How many to list.                                                                                                            |      ні      |
| page?    | number | Which page to list.                                                                                                          |      ні      |
| table?   | рядок  | Variable table.                                                                                                              |      ні      |

| Options     | Returns         |                                         |
| ----------- | --------------- | --------------------------------------- |
| **{top}**   | number          | Returns the position of the user.       |
| **{name}**  | рядок           | Returns the username.                   |
| **{tag}**   | рядок           | Returns the username and discriminator. |
| **{id}**    | integer         | Returns the user ID.                    |
| **{value}** | number, integer | Returns the variable value.             |

## Приклад(и)

This will return a leaderboard of the "Example" variable:

```javascript
bot.command({
    name: "rawLeaderboard",
    code: `
    $rawLeaderboard[Example;asc;globalUser;{top} - {username} - {value};10;1;main]
    `
});
```