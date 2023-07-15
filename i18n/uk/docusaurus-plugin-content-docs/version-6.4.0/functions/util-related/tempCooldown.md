---
title: '$tempCooldown'
description: '$tempCooldown will create a temporary cooldown for a command.'
id: tempCooldown
---

`$tempCooldown` will create a temporary cooldown for a command.

## Використання

```php
$tempCooldown[time;id;errorMessage?]
```

* You are able to retrieve the remaining cooldown in the `$tempCooldown` function by using **`%time%`** or any of the following below.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## Параметри

| Поле         | Тип   | Опис                                                        | Обов'язковий |
| ------------ | ----- | ----------------------------------------------------------- |:------------:|
| time         | рядок | The duration of the cooldown.                               |     так      |
| id           | рядок | Can be user, guild, message, channel or any other ID.       |     так      |
| errorMessage | рядок | Error message when there's remaining time for the cooldown. |     так      |

## Приклад(и)

This will set a temporary cooldown for a command which applies once only:

```javascript
bot.command({
    name: 'tempCooldown',
    code: `
  hello
  $tempCooldown[2m;customid;Please wait %time% to execute this command again.]
  `
});
```
