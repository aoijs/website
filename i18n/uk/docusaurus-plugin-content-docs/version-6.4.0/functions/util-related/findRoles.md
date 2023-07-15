---
title: '$findRoles'
description: '$findRoles will return all matching roles depending on the given query.'
id: findRoles
---

`$findRoles` will return all matching roles depending on the given query.

## Використання

```php
$findRoles[roleResolver;limit?;type?;format?]
```

## Параметри

| Поле         | Тип    | Опис                                             | Обов'язковий |
| ------------ | ------ | ------------------------------------------------ |:------------:|
| roleResolver | рядок  | Query to match.                                  |     так      |
| limit?       | number | The maximum amount of roles the bot will return. |      ні      |
| тип?         | рядок  | Type of the search query.                        |      ні      |
| format?      | рядок  | Formatting for the output.                       |      ні      |

### Parameters for the `format` argument

* {position} -> returns the position
* {id} -> returns the role ID
* {username} -> returns the role name

## Приклад(и)

This will return all roles which are named `Owner`:

```javascript
bot.command({
    name: 'findRoles',
    code: `
  $findRoles[Owner;5;startsWith;{position}) {username}: {id}]
  `
});
```
