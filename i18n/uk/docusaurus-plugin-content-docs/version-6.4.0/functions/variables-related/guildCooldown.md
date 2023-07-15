---
title: '$guildCooldown'
description: '$guildCooldown will set a cooldown for the guild after being used.'
id: guildCooldown
---

`$guildCooldown` will set a guild-based cooldown.

## Використання

```php
$guildCooldown[time;errorMessage]
```

* You are able to retrieve the remaining cooldown in the `$guildCooldown` function by using **`%time%`** or any of the following below.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## Параметри

| Поле         | Тип    | Опис                                                        | Обов'язковий |
| ------------ | ------ | ----------------------------------------------------------- |:------------:|
| time         | number | The duration of the cooldown.                               |     так      |
| errorMessage | рядок  | Error message when there's remaining time for the cooldown. |     так      |

## Приклад(и)

This will set a cooldown for a command which applies to the guild only and returns the remaining cooldown:

```javascript
bot.command({
    name: 'guildCooldown',
    code: `
  hello
  $guildCooldown[2m;Please wait %time% to execute this command again.]
  `
});
```
