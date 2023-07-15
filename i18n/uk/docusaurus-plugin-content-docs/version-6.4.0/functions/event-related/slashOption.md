---
title: '$slashOption'
description: '$slashOption returns data of a slash command option.'
id: slashOption
---

`$slashOption` returns data of a slash command option.

## Використання

```php
$slashOption[option]
```

## Параметри

| Поле   | Тип   | Опис         | Обов'язковий |
| ------ | ----- | ------------ |:------------:|
| option | рядок | Option name. |     так      |

## Приклад(и)

```javascript
$createApplicationCommand[global;exampleslash;Simple example slash command.;true;slash;[{
    "name": "exampleOption",
    "description": "example slash command option",
    "required": true,
    "type": 3
}]]
```

```javascript
bot.command({
    name: 'exampleslash',
    type: 'interaction',
    prototype: 'slash',
    code: `
    $interactionReply[What a great example! You entered $slashOption[exampleOption]!]`
});
```