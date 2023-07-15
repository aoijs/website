---
title: '$deleteThread'
description: '$deleteThread eliminará un hilo dado de un canal.'
id: deleteThread
---

`$deleteThread` eliminará un hilo determinado de un canal.

## Uso

```php
$deleteThread[canalID;ID de subproceso;razon?]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                                      | Requerido |
| ------- | ------ | --------------------------------------------------------------- |:---------:|
| canalID | entero | El ID del canal en el que existe el subproceso.                 | verdadero |
| hiloID  | entero | El hilo ID.                                                     | verdadero |
| ¿razón? | string | razón que se mostrará en los registros de auditoría del gremio. |   falso   |

## Ejemplo(s)

Esto eliminará un hilo del canal en el que se ejecuta el comando ( asegúrese de reemplazar el hilo ID con un hilo ID real ):

```javascript
bot.command({
    name: 'deleteThread',
    code: `
  $deleteThread[$channelID;threadID;Crazy Example.]
  `
});
```