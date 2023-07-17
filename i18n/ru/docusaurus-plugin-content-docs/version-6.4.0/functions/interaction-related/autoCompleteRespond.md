---
title: '$autoCompleteRespond'
description: '$autoCompleteRespond используется для автоматического завершения параметров слэша.'
id: autoCompleteRespond
---

`$autoCompleteRespond` используется для автоматического завершения косой черты.

## Использование

```php
$autoCompleteRespond[object]
```

```php
$autoCompleteRespond[OptionName;OptionReply;...]
```

## Параметры

| Название             | Nbg    | Описание                                                                                     | Нужно |
| -------------------- | ------ | -------------------------------------------------------------------------------------------- |:-----:|
| Название опции       | строка | Имя опции автозаполнения, которая будет отображаться пользователю.                           |  да   |
| Дополнительный ответ | строка | Ответ, который будет отправлен, если выбран параметр автозаполнения (не видим пользователю). |  да   |

## Пример(ы)

Создайте слэш-команды: (пожалуйста, обратите внимание, что вам нужны события `: ["onMessage", "onInteractionCreate"]` событие в вашем основном файле)

```javascript
bot.command({
    name: 'createSlashCommand',
    code: `
  $createApplicationCommand[global; xample;Отличный пример команды взаимодействия с автозавершением! true;slash; {
  "name": "option",
  "description": "test",
  "required": false,
  "type": 3,
  "autocomplete": true
}]
  `
});
```

Команда взаимодействия:

```javascript
bot.command({
    name: "test",
    prototype: "slash",
    code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[First option;You selected the first option, therefore I'm responding with this!;Second option;You selected the first second, therefore I'm responding with this!]
  $else
  $interactionReply[$slashOption[option];;;everyone]
  $endif
  `
});
```

### Дополнительный пример

Создайте слэш-команды: (пожалуйста, обратите внимание, что вам нужны события `: ["onMessage", "onInteractionCreate"]` событие в вашем основном файле)

```javascript
bot.command({
    name: 'createSlashCommand',
    code: `
  $createApplicationCommand[global; xample;Отличный пример команды взаимодействия с автозавершением! true;slash; {
  "name": "option",
  "description": "test",
  "required": false,
  "type": 3,
  "autocomplete": true
}, {
  "name": "anotheroption",
  "description": "test",
  "required": false,
  "type": 3
}]
  `
});
```

Команда взаимодействия:

```javascript
bot.command({
    name: "test",
    prototype: "slash",
    $if: "old",
    код: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[[{ 
    "name" : "First Option",
    "value" : "Вы выбрали первый параметр, поэтому я отвечаю!"
  }, {
    "name" : "Second Option",
    "value" : "Вы выбрали второй параметр, поэтому я отвечу с этим!"
  }]]
  $else
  $interactionReply[$slashOption[option] - автозаполнение #SEMI# $slashOption[anotheroption] - ложное автозаполнение;;;;everyone]
  $endif
  `
});
```
