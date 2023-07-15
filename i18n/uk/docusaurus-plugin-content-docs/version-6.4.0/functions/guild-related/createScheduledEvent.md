---
title: '$createScheduledEvent'
description: '$createScheduledEvent will create a scheduled event.'
id: createScheduledEvent
---

`$createScheduledEvent` will create a scheduled event.

## Використання

```php
$createScheduledEvent[channelID;name;description;startTime;endTime?;entityType?;entityMetadata?;image?;reason?]
```

## Параметри

| Поле            | Тип     | Опис                                                          | Обов'язковий |
| --------------- | ------- | ------------------------------------------------------------- |:------------:|
| channelID       | integer | Where the event will be held.                                 |     так      |
| назва           | рядок   | The event title                                               |     так      |
| опис            | рядок   | The description of the event.                                 |     так      |
| startTime       | рядок   | When the event will start.                                    |     так      |
| endTime?        | рядок   | When the event will end.                                      |      ні      |
| entityType?     | рядок   | Event Type.                                                   |      ні      |
| entityMetadata? | рядок   | Event metadata.                                               |      ні      |
| image?          | рядок   | Image/Thumbnail of the scheduled event.                       |      ні      |
| reason?         | рядок   | The reason which will be displayed in the guild's audit logs. |      ні      |
