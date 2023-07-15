---
title: '$findRoles'
description: '$findRoles will return all matching roles depending on the given query.'
id: findRoles
---

`$findRoles` will return all matching roles depending on the given query.

## Modo de uso

```php
$findRoles[roleResolver;limit?;type?;format?]
```

## Parámetros

| Campo        | Tipo     | Parámetros                                       | Requerido |
| ------------ | -------- | ------------------------------------------------ |:---------:|
| roleResolver | consulta | Query to match.                                  | verdadero |
| limit?       | número   | The maximum amount of roles the bot will return. |    no     |
| tipo?        | string   | Type of the search query.                        |   falso   |
| format?      | string   | Formatting for the output.                       |   falso   |

### Parameters for the `format` argument

* {position} -> returns the position
* {id} -> returns the role ID
* {username} -> returns the role name

## Ejemplo(s)

This will return all roles which are named `Owner`:

```javascript
bot.command({
    name: 'findRoles',
    code: `
  $findRoles[Owner;5;startsWith;{position}) {username}: {id}]
  `
});
```
