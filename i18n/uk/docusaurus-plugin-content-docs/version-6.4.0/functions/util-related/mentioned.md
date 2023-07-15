---
title: '$mentioned'
description: '$mentioned will return the ID of an user of the mention.'
id: mentioned
---

`$mentioned` will return the ID of an user of the mention.

## Використання

```php
$mentioned[index;returnSelf?]
```

## Параметри

| Поле        | Тип     | Опис                                          | Обов'язковий |
| ----------- | ------- | --------------------------------------------- |:------------:|
| індекс      | number  | The index of the argument.                    |     так      |
| returnSelf? | boolean | Return the author's ID if user was not found. |      ні      |

## Приклад(и)

This will return the ID of the **first** mention if you attempt to mention someone in this command, or else it will return your ID:

```javascript
bot.command({
    name: 'mentioned',
    code: `
  $mentioned[1;true]
  `
});
```
