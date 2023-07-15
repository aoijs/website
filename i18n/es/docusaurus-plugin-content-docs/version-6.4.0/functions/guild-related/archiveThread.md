---
title: '$archiveThread'
description: '$archiveThread will archive or unarchive a specific thread.'
id: archiveThread
---

`$archiveThread` archivará o desarchivará un hilo específico.

## Uso

```php
$archiveThread[ID de subproceso;canalID?;archivo?;razón?]
```

## Parámetros

| Campo    | Tipo     | Descripción                                                     | Requerido |
| -------- | -------- | --------------------------------------------------------------- |:---------:|
| hiloID   | entero   | El hilo ID.                                                     | verdadero |
| canalID? | entero   | ID del canal de donde se encuentra el tema.                     |   falso   |
| archivo? | booleano | ¿Archivar el hilo dado?                                         |   falso   |
| ¿razón?  | cadena   | Razón que se mostrará en los registros de auditoría del gremio. |   falso   |

## Ejemplo(s)

Esto archivará el hilo creado:

```javascript
bot.command({
    name: 'archiveThread',
    code: `
  $archiveThread[$channelID;$get[id];true;testing]
  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  
  `
});
```
