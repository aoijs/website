---
title: '$cpu'
description: '$cpu will return CPU usage of a process or the OS.'
id: cpu
---

`$cpu` will return CPU usage of a process or the OS.

## Використання

```php
$cpu[option?]
```

## Параметри

| Поле    | Тип   | Опис                                                                                                                                                                            | Обов'язковий |
| ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| option? | рядок | The option that the CPU usage will be returned of. <br /> 1. **os** - returns the CPU usage of the bot <br /> 2. **process** - returns the CPU usage of the process |      ні      |

## Приклад(и)

This will return the CPU usage of your bot:

```javascript
bot.command({
    name: 'cpu',
    code: `
  OS: $cpu[os] 
  Process: $cpu[process] 
  `
});
```