---
title: '$roleCount'
description: '$roleCount will return the guild''s role count.'
id: roleCount
---

`$roleCount` will return the guild's role count.

## Modo de uso

```php
$roleCount[guildID?;fetchFirst?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                                                                                          | Requerido |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero  | The ID of the guild.                                                                                                |    no     |
| fetchFirst? | boolean | Fetch the roles first before returning the count?  <br /> 1. **true** <br /> 2. **false** (por defecto) |    no     |

## Ejemplo(s)

Esto devolverá la cantidad de roles de tu gremio:

```javascript
bot.command({
    name: 'roleCount',
    code: `
  $roleCount[$guildID;true]
  `
});
```