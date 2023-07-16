---
title: '$findMember'
description: '$findMember will find a specific member in a specific guild by their name.'
id: findMember
---

`$findMember` will find a specific member in a specific guild.

## Uso

```php
$findMember[userResolver;returnSelf?;guildID?]
```

## Parámetros

| Campo        | Tipo     | Parámetros                                            | Requerido |
| ------------ | -------- | ----------------------------------------------------- |:---------:|
| userResolver | consulta | User you want to find.                                | verdadero |
| returnSelf?  | boolean  | Return the author ID if the given user was not found. |    no     |
| servidorID?  | entero   | Guild ID where the user is present in.                |   falso   |

## Ejemplo(s)

This will return your ID as `Leref` was not found in the given guild:

```javascript
bot.command({
    name: 'findMember',
    code: `
  $findMember[Leref;true;$guildID]
  `
});
```
