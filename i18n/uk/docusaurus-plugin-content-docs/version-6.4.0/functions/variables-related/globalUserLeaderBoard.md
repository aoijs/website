---
title: '$globalUserLeaderBoard'
description: '$globalUserLeaderBoard will return a leaderboard of a global user variable.'
id: globalUserLeaderBoard
---

`$globalUserLeaderBoard` will return a leaderboard of a global user variable.

## Використання

```php
$globalUserLeaderBoard[variable;type?;custom?;list?;page?;table?]
```

## Параметри

| Поле     | Тип    | Опис                                                                                                                  | Обов'язковий |
| -------- | ------ | --------------------------------------------------------------------------------------------------------------------- |:------------:|
| variable | рядок  | Variable name.                                                                                                        |     так      |
| тип      | рядок  | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descending) |      ні      |
| custom?  | рядок  | Formatting.                                                                                                           |      ні      |
| list?    | number | How many to list.                                                                                                     |      ні      |
| page?    | number | Which page to list.                                                                                                   |      ні      |
| table?   | рядок  | Variable table.                                                                                                       |      ні      |

| Options        | Returns         |                                         |
| -------------- | --------------- | --------------------------------------- |
| **{top}**      | number          | Returns the position of the user.       |
| **{username}** | рядок           | Returns the username.                   |
| **{tag}**      | рядок           | Returns the username and discriminator. |
| **{id}**       | integer         | Returns the user ID.                    |
| **{value}**    | number, integer | Returns the variable value.             |

## Приклад(и)

This will returns a leaderboard of the "Example" variable:

```javascript
bot.command({
    name: "globalUserLeaderBoard",
    code: `
    $globalUserLeaderBoard[Example;asc;{top} - {username} - {value};10;1;main]
    `
});
```