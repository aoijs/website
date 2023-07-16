---
title: $interactionDeferUpdate
description: '$interactionDeferUpdate відкриває інтерактивне повідомлення, яке буде оновлено.'
id: interactionDeferUpdate
---

`$interactionDeferUpdate` повідомляє інтерактивне повідомлення, яке буде оновлено.

## Використання

```php
$interactionDeferUpdate[ephemeral]
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
   $interactionFollowUp[This is the first message!]
   $interactionEdit[This is the second message!]
   $interactionDeferUpdate[true]`
});
```