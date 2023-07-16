---
title: '$findRole'
description: '$findRole will search and return a given role of a certain guild.'
id: findRole
---

`$findRole` will search and return a given role of a certain guild.

## Uso

```php
$findRole[roleResolver;guildID?]
```

## Parámetros

| Campo        | Tipo     | Parámetros                             | Requerido |
| ------------ | -------- | -------------------------------------- |:---------:|
| roleResolver | consulta | Name of the role you want to find.     | verdadero |
| servidorID?  | entero   | Guild ID where the role is present in. |    no     |

## Ejemplo(s)

This will return the role ID of the role `Owner` if it exists:

```javascript
bot.command({
    name: 'findRole',
    code: `
  $findRole[Owner;$guildID]
  `
});
```
