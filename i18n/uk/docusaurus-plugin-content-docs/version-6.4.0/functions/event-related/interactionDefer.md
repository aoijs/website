---
title: $interactionDefer
description: '$interactionDefer захищує взаємодію за останні 15 хвилин.'
id: interactionDefer
---

`$interactionDefer` повідомляє про взаємодію за останні 15 хвилин.

## Використання

```php
$interactionDefer[ephemeral]
```

## Параметри

| Поле      | Тип     | Опис                                   | Обов'язковий |
| --------- | ------- | -------------------------------------- |:------------:|
| ефегемаль | boolean | Видимий лише автору командного автора? |     так      |

## Приклад(и)

```javascript
bot.command({
    name: 'exampleButton',
    type: 'interaction',
    prototype: 'button',
    код: `
   $interactionFollowUp[This is the second message!] 
   $interactionFollowUp[This is the first message!] 
   $interactionDefer[true]`
});
```