---
title: '$wait'
description: '$wait will delay functions from executing for a given time.'
id: wait
---

`$wait` will delay functions from executing for a given time.

## Використання

```php
$wait[time]
```

## Параметри

| Поле | Тип            | Опис                             | Обов'язковий |
| ---- | -------------- | -------------------------------- |:------------:|
| time | string, number | How long to delay the execution. |     так      |

## Приклад(и)

This will send an embed delayed:

```javascript
bot.command({
    name: "wait",
    code: `
    $description[Hello!]
    $wait[5s]
    $sendMessage[Oh, what's that?]
    `
});
```