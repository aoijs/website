---
title: '$interactionDefer'
description: '$interactionDefer defers an Interaction of the last 15 minutes.'
id: interactionDefer
---

`$interactionDefer` defers an Interaction of the last 15 minutes.

## Використання

```php
$interactionDefer[ephemeral]
```

## Параметри

| Поле      | Тип     | Опис                                | Обов'язковий |
| --------- | ------- | ----------------------------------- |:------------:|
| ephemeral | boolean | Visible to the command author only? |     так      |

## Приклад(и)

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