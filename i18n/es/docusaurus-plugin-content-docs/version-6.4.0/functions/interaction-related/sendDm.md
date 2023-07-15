---
title: '$sendDm'
description: '$sendDm enviará un mensaje directo a un usuario dado.'
id: sendDm
---

`$sendDm` enviará un mensaje directo a un usuario determinado.

## Uso

```php
$sendDm[mensaje;ID de usuario?;ID de retorno?]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                                                                  | Requerido |
| -------------- | -------- | ------------------------------------------------------------------------------------------- |:---------:|
| mensaje        | consulta | El contenido del mensaje directo.                                                           | verdadero |
| usarioID?      | consulta | El usuario que recibirá el DM.                                                              |   falso   |
| ID de retorno? | booleano | ¿Devolver ID del mensaje?  <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

Esto enviará un DM al autor del comando:

```javascript
bot.command({
    name: 'sendDm',
    code: `
   $sendDm[Hello!;$authorID;false]  
  `
});
```