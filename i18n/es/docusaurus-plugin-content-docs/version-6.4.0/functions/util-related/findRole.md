---
title: '$findRole'
description: '$findRole buscará y devolverá un rol dado de un cierto gremio.'
id: findRole
---

`$findRole` buscará y devolverá un determinado papel de un gremio.

## Uso

```php
$findRole[resolución de rol;servidorID?]
```

## Parámetros

| Campo        | Tipo   | Parámetros                                    | Requerido |
| ------------ | ------ | --------------------------------------------- |:---------:|
| resolver rol | cadena | Nombre del grupo que deseas aplicar           | verdadero |
| servidorID?  | entero | ID del gremio donde el usuario está presente. |   falso   |

## Ejemplo(s)

Esto devolverá el ID de rol del rol `Owner` si existe:

```javascript
bot.command({
    name: 'findRole',
    code: `
  $findRole[Owner;$guildID]
  `
});
```
