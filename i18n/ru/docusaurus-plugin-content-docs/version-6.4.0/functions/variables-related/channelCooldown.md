---
title: $channelCooldown
description: '$channelCooldown установит откат привязки к определенному каналу после выполнения команды.'
id: channelCooldown
---

`$channelCooldown` установит перезарядку по каналу.

## Использование

```php
$channelCooldown[time;errorMessage]
```

* Вы можете получить оставшуюся перезарядку функции `$channelCooldown` с помощью **`%time%`** или любой из ниже.
    * `%time%`, `%year%`, `%month%`, `%week%`, `%day%`, `%hour%`, `%min%`, `%sec%`, `%ms%`, `%fullTime%`

## Параметры

| Название         | Nbg    | Описание                                                                  | Нужно |
| ---------------- | ------ | ------------------------------------------------------------------------- |:-----:|
| время            | строка | Время ожидания таймера                                                    |  да   |
| сообщение ошибки | строка | Сообщение об ошибке, когда заданный таймер перезарядки остается активным. | ложь  |

## Пример(ы)

Это установит откат для команды в канале, в котором была выполнена команда, и возвращает оставшуюся перезарядку :

```javascript
bot.command({
    имя: 'channelCooldown',
    код: `
  hello
  $channelCooldown[2m;Please wait %time% to execute this command again.]
  «
});
```