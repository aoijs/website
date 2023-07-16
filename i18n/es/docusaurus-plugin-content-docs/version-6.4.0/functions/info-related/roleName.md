---
title: '$roleName'
description: '$roleName devolverá el nombre de un rol específico.'
id: roleName
---

`$roleName` devolverá el nombre de un rol específico.

## Uso

```php
$roleName[rolID;servidorID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                     | Requerido |
| ----------- | ------ | -------------------------------------------------------------- |:---------:|
| rolID       | entero | El ID del rol del que desea que se devuelva el nombre del rol. | verdadero |
| servidorID? | entero | ID del servidor.                                               |    no     |

## Ejemplo(s)

Esto devolverá el nombre del rol que quieras, en este caso, devolvería `@everyone`:

```javascript
bot.command({
    name: 'roleName',
    code: `
  \`$roleName[$guildID]\`
  `
});
```
