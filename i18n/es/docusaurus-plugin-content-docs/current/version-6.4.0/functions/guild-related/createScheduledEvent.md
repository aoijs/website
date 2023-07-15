---
title: '$createScheduledEvent'
description: '$createScheduledEvent will create a scheduled event.'
id: createScheduledEvent
---

`$createScheduledEvent` will create a scheduled event.

## Modo de uso

```php
$createScheduledEvent[channelID;name;description;startTime;endTime?;entityType?;entityMetadata?;image?;reason?]
```

## Parámetros

| Campo           | Tipo     | Parámetros                                                    | Requerido |
| --------------- | -------- | ------------------------------------------------------------- |:---------:|
| canalID         | entero   | Where the event will be held.                                 | verdadero |
| name            | consulta | The event title                                               | verdadero |
| description     | string   | The description of the event.                                 |    sí     |
| startTime       | string   | When the event will start.                                    |    sí     |
| endTime?        | cadena   | When the event will end.                                      |    no     |
| entityType?     | cadena   | Event Type.                                                   |   falso   |
| entityMetadata? | cadena   | Event metadata.                                               |   falso   |
| image?          | cadena   | Image/Thumbnail of the scheduled event.                       |   falso   |
| ¿razón?         | cadena   | The reason which will be displayed in the guild's audit logs. |   falso   |
