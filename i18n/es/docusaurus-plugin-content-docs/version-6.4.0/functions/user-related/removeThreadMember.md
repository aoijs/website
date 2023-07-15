---
title: '$removeThreadMember'
description: '$removeThreadMember will remove a given thread member from a given thread.'
id: removeThreadMember
---

`$removeThreadMember` will remove a given thread member from a given thread.

## Modo de uso

```php
$removeThreadMember[channelID;threadID;userID;reason?]
```

## Parámetros

| Campo    | Tipo   | Parámetros                                                      | Requerido |
| -------- | ------ | --------------------------------------------------------------- |:---------:|
| canalID  | entero | The ID of the channel of where the thread is located in.        | verdadero |
| hiloID   | entero | El hilo ID.                                                     | verdadero |
| usarioID | entero | The ID of the user that will be removed from the given thread.  |    sí     |
| ¿razón?  | string | Razón que se mostrará en los registros de auditoría del gremio. |   falso   |

## Ejemplo(s)

This will remove the command author from a given thread:

```javascript
bot.command({
    name: 'removeThreadMember',
    code: `
   $removeThreadMember[$channelID;threadID;$authorID;Testing functions!]
  `
});
```