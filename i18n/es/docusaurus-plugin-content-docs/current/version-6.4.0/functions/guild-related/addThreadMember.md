---
title: '$addThreadMember'
description: '$addThreadMember añadirá un miembro a un hilo.'
id: addThreadMember
---

`$addThreadMember` añadirá un miembro a un hilo.

## Uso

```php
$addThreadMember[canalID;ID de subproceso;ID de usuario;razón]
```

## Parámetros

| Campo    | Tipo   | Descripción                                                     | Requerido |
| -------- | ------ | --------------------------------------------------------------- |:---------:|
| canalID  | entero | ID del canal de donde se encuentra el tema.                     | verdadero |
| hiloID   | entero | El hilo ID.                                                     | verdadero |
| usarioID | entero | El usuario que debe ser añadido al hilo.                        | verdadero |
| ¿razón?  | cadena | razón que se mostrará en los registros de auditoría del gremio. | verdadero |

## Ejemplo(s)

Esto creará un hilo y añadirá un usuario aleatorio a él:

```javascript
bot.command({
    name: 'addThreadMember',
    code: `
  $addThreadMember[$channelID;$get[id];$randomUserID;testing]
  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  
  `
});
```
