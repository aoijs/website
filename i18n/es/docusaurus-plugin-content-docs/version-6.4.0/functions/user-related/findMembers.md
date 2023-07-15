---
title: '$findMembers'
description: '$findMembers will return all members with similar username.'
id: findMembers
---

`$findMembers` will return all members with similar username.

## Modo de uso

```php
$findMembers[userResolver;limit?;type?;force?;format?]
```

## Parámetros

| Campo        | Tipo     | Parámetros                                                     | Requerido |
| ------------ | -------- | -------------------------------------------------------------- |:---------:|
| userResolver | consulta | Query of the username the bot will search for.                 | verdadero |
| limit?       | número   | The amount of results the bot will return.                     |    no     |
| tipo?        | string   | Type of the search query.                                      |   falso   |
| force?       | boolean  | 1. **true** <br /> 2. **false** (por defecto)            |   falso   |
| format?      | cadena   | The format the bot will return the found users (listed below). |    no     |

### Parameters for the `format` argument

* {position} -> returns the position
* {id} -> returns the user ID
* {username} -> returns the username
* {nick} -> returns the nickname
* {tag} -> returns the user discriminator

## Ejemplo(s)

This will return twenty members with `Leref` in their username:

```javascript
bot.command({
    name: 'findMembers',
    code: `
  $findMembers[Leref;20;startsWith;true;{position}) {username}#{tag}]
  `
});
```
