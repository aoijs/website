---
title: $interactionDefer
description: '$interactionDefer защищает взаимодействие за последние 15 минут.'
id: interactionDefer
---

`$interactionDefer` защищает взаимодействие за последние 15 минут.

## Использование

```php
$interactionDefer[ephemeral]
```

## Параметры

| Название  | Nbg     | Описание                      | Нужно |
| --------- | ------- | ----------------------------- |:-----:|
| эфемерный | boolean | Видимо только автору команды? |  да   |

## Пример(ы)

```javascript
bot.command({
    name: 'exampleButton',
    type: 'interaction',
    prototype: 'button',
    code: `
   $interactionFollowUp[This is the second message!] 
   $interactionFollowUp[This is the first message!] 
   $interactionDefer[true]`
});
```