---
title: '$guildLeaderboard'
description: '$guildLeaderboard will return a leaderboard of a guild variable.'
id: guildLeaderboard
---

`$guildLeaderboard` will return a leaderboard of a guild variable.

## Використання

```php
$guildLeaderboard[variable;type?;custom?;list?;page?;table?]
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

| Options     | Returns         |                                         |
| ----------- | --------------- | --------------------------------------- |
| **{top}**   | number          | Returns the user position of the guild. |
| **{name}**  | рядок           | Returns the user name.                  |
| **{id}**    | integer         | Returns the guild ID.                   |
| **{value}** | number, integer | Returns the variable value.             |

## Приклад(и)

This will returns a leaderboard of the "Example" variable:

```javascript
bot.command({
    name: "guildLeaderboard",
    code: `
    $guildLeaderboard[Example;asc;{top} - {name} - {value};10;1;main]
    `
});
```
