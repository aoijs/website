---
title: '$modifyRole'
description: '$modifyRole modificará un rol determinado.'
id: modifyRole
---

`$modifyRole` modificará un rol determinado.

## Uso

```php
$modifyRole[servidorID;rolID;...datos]
```

## Parámetros

| Campo      | Tipo           | Parámetros                                               | Requerido |
| ---------- | -------------- | -------------------------------------------------------- |:---------:|
| servidorID | entero         | El ID de la hermandad de donde están ubicados los roles. | verdadero |
| rolID      | entero         | El ID de rol a modificar.                                | verdadero |
| ...datos   | cadena, objeto | Nuevos datos de rol.                                     | verdadero |

## Ejemplo(s)

Esto editará un rol existente / cambiar su nombre a "¡Impresionante!":

```javascript
bot.command({
    name: 'modifyRole',
    code: `
  $modifyRole[$guildID;roleID;{
    "name": "Impresionante!"
  }]
  `
});
```