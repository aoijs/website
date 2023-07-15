---
title: '$createScheduledEvent'
description: '$createScheduledEvent creará un evento programado.'
id: createScheduledEvent
---

`$createScheduledEvent` creará un evento programado.

## Uso

```php
$createScheduledEvent[canalID;nombre;descripción;hora de inicio;hora de finalización?;entityType?;entidadMetadatos?;imagen?;razón?]
```

## Parámetros

| Campo                 | Tipo     | Parámetros                                                      | Requerido |
| --------------------- | -------- | --------------------------------------------------------------- |:---------:|
| canalID               | entero   | Donde se llevará a cabo el evento.                              | verdadero |
| nombre                | consulta | El título del evento                                            | verdadero |
| description           | string   | La posición del elemento.                                       | verdadero |
| hora de inicio        | cadena   | Cuando el evento comenzará.                                     | verdadero |
| hora de finalización? | cadena   | Cuando el evento comenzará.                                     |   falso   |
| tipo de entidad?      | cadena   | Tipo de evento.                                                 |   falso   |
| entidad Metadata?     | cadena   | Metadatos de evento.                                            |   falso   |
| imagen?               | cadena   | Imagen / Miniatura del evento programado.                       |   falso   |
| ¿razón?               | cadena   | razón que se mostrará en los registros de auditoría del gremio. |   falso   |
