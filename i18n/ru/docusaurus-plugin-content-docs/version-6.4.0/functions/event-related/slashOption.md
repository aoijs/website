---
title: $slashOption
description: '$slashOption возвращает данные о опции команды слэша.'
id: slashOption
---

`$slashOption` возвращает данные о опции команды слэш.

## Использование

```php
$slashOption[option]
```

## Параметры

| Название | Nbg    | Описание            | Нужно |
| -------- | ------ | ------------------- |:-----:|
| опция    | строка | Название параметра. |  да   |

## Пример(ы)

```javascript
$createApplicationCommand[global;exampleslash;Простой пример команды.;true;slash;[{
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
    $interactionReply[What a great example! Вы вошли в $slashOption[exampleOption]!]`
};
```