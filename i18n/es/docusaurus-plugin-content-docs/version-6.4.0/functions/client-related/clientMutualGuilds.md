---
title: '$clientMutualGuilds'
description: '$clientMutualGuilds devolverá los servidores mutuos con un usuario dado y el bot.'
id: clientMutualGuilds
---

`$clientMutualGuilds` devolverá los servidores mutuos con un usuario dado y el bot.

## Uso

```php
$clientMutualGuilds[usarioID?;sep?]
```

## Parámetros

| Campo     | Tipo    | Descripción                                      | Requerido |
| --------- | ------- | ------------------------------------------------ |:---------:|
| usarioID? | integer | El ID del usuario.                               |    no     |
| sep?      | string  | El separador para separar los valores devueltos. |    no     |

## Ejemplo(s)

Esto devolverá los servidores mutuos de usted y el bot:

```javascript
bot.command({
    name: 'clientMutualGuilds',
    code: `
  $clientMutualGuilds[$authorID;, ]
  `
});
```
