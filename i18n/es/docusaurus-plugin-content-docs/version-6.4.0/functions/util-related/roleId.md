---
title: '$roleId'
description: '$roleId devolverá el ID de un rol.'
id: roleId
---

`$roleId` devolverá el ID de un rol.

## Uso

```php
$roleId[roleResolver;guildID?]
```

## Parámetros

| Campo        | Tipo     | Parámetros                              | Requerido |
| ------------ | -------- | --------------------------------------- |:---------:|
| resolver rol | consulta | Nombre del rol.                         | verdadero |
| servidorID?  | consulta | ID del gremio en el que se creó el rol. |    no     |

## Ejemplo(s)

Esto devolverá el ID de rol de un rol llamado `Propietario` (este ejemplo no funcionará si no tienes ese rol):

```javascript
bot.command({
    name: 'roleId',
    code: `
  $roleId[Owner;$guildID]
  `
});
```