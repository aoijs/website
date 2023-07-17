---
title: $createScheduledEvent
description: '$createScheduledEvent wird ein geplantes Ereignis erstellen.'
id: createScheduledEvent
---

`$createScheduledEvent` wird ein geplantes Ereignis erstellen.

## Verwendung

```php
$createScheduledEvent[channelID;name;description;startTime;endTime?;entityType?;entityMetadata?;image?;reason?]
```

## Verwendung

| Feld             | Typ        | Beschreibung                                                      | Erforderlich |
| ---------------- | ---------- | ----------------------------------------------------------------- |:------------:|
| channelID        | ganze Zahl | Wo das Event stattfinden wird.                                    |     wahr     |
| name             | string     | Titel des Ereignisses                                             |     wahr     |
| beschreibung     | string     | Die Beschreibung des Ereignisses.                                 |     wahr     |
| startTime        | string     | Wann das Ereignis beginnt.                                        |     wahr     |
| endTime?         | string     | Wenn das Ereignis endet.                                          |    falsch    |
| entityType?      | string     | Ereignistyp.                                                      |    falsch    |
| entityMetadaten? | string     | Ereignis-Metadaten.                                               |    falsch    |
| bild?            | string     | Bild/Vorschaubild der geplanten Veranstaltung.                    |    falsch    |
| warum?           | string     | Der Grund, der in den Audit-Protokollen der Gilde angezeigt wird. |    falsch    |
