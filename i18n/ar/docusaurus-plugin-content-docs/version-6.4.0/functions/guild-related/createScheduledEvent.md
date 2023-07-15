---
title: '$createScheduledEvent'
description: '$createScheduledEvent will create a scheduled event.'
id: createScheduledEvent
---

`$createScheduledEvent` will create a scheduled event.

## الاستخدام

```php
$createScheduledEvent[channelID;name;description;startTime;endTime?;entityType?;entityMetadata?;image?;reason?]
```

## البارامترات

| Field           | النوع   | الديسكبربشين                                                  | مطلوب |
| --------------- | ------- | ------------------------------------------------------------- |:-----:|
| channelID       | Integer | Where the event will be held.                                 | true  |
| name            | string  | The event title                                               | true  |
| الديسكبربشين    | string  | The description of the event.                                 | true  |
| startTime       | string  | When the event will start.                                    | true  |
| endTime?        | string  | When the event will end.                                      | false |
| entityType?     | string  | Event Type.                                                   | false |
| entityMetadata? | string  | Event metadata.                                               | false |
| image?          | string  | Image/Thumbnail of the scheduled event.                       | false |
| reason?         | string  | The reason which will be displayed in the guild's audit logs. | false |
