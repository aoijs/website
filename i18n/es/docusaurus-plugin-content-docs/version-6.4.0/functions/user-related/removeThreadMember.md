---
title: '$removeThreadMember'
description: '$removeThreadMember eliminará a un miembro determinado del hilo de un hilo dado.'
id: removeThreadMember
---

`$removeThreadMember` eliminará a un miembro determinado del hilo de un hilo dado.

## Uso

```php
$removeThreadMember[canalID;ID de subproceso;ID de usuario;razón]
```

## Parámetros

| Campo    | Tipo   | Parámetros                                                      | Requerido |
| -------- | ------ | --------------------------------------------------------------- |:---------:|
| canalID  | entero | El ID del canal en el que se encuentra el hilo.                 | verdadero |
| hiloID   | entero | El hilo ID.                                                     | verdadero |
| usarioID | entero | El ID del usuario que será eliminado del hilo dado.             | verdadero |
| ¿razón?  | string | Razón que se mostrará en los registros de auditoría del gremio. |   falso   |

## Ejemplo(s)

Esto eliminará el autor del comando de un hilo determinado:

```javascript
bot.command({
    name: 'removeThreadMember',
    code: `
   $removeThreadMember[$channelID;threadID;$authorID;Testing functions!]
  `
});
```