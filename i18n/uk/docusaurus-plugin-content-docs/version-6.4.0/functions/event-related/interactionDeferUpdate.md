---
title: '$interactionDeferUpdate'
description: '$interactionDeferUpdate defers the interaction message that will be updated.'
id: interactionDeferUpdate
---

`$interactionDeferUpdate` defers the interaction message that will be updated.

## Використання

```php
$interactionDeferUpdate[ephemeral]
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
   $interactionFollowUp[This is the first message!]
   $interactionEdit[This is the second message!]
   $interactionDeferUpdate[true]`
});
```