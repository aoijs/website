---
title: '$deafenUser'
description: '$deafenUser will deafen a user.'
id: deafenUser
---

`$deafenUser` will deafen a user.

## Використання

```php
$deafenUser[userID;deafen?]
```

## Параметри

| Поле    | Тип     | Опис                                                                                            | Обов'язковий |
| ------- | ------- | ----------------------------------------------------------------------------------------------- |:------------:|
| userID  | integer | The user who will be deafened or undeafened.                                                    |     так      |
| deafen? | boolean | Deafen or Undeafen the given user. <br /> 1. **true** (default) <br /> 2. **false** |      ні      |

## Приклад(и)

This will deafen yourself:

```javascript
bot.command({
    name: 'deafen',
    code: `
  $deafen[$authorID;true]
  `
});
```
