---
title: '$createScheduledEvent'
description: '$createScheduledEvent will create a scheduled event.'
id: createScheduledEvent
---

`$createScheduledEvent` will create a scheduled event.

## प्रोयोग

```php
$createScheduledEvent[channelID;name;description;startTime;endTime?;entityType?;entityMetadata?;image?;reason?]
```

## पैरामीटर्स

| फील्ड           | टाइप     | डिस्क्रिप्शन                                                  |    चाहिए     |
| --------------- | -------- | ------------------------------------------------------------- |:------------:|
| channelID       | integer  | Where the event will be held.                                 |     true     |
| name            | स्ट्रिंग | The event title                                               |     true     |
| डिस्क्रिप्शन    | स्ट्रिंग | The description of the event.                                 |     true     |
| startTime       | स्ट्रिंग | When the event will start.                                    |     true     |
| endTime?        | स्ट्रिंग | When the event will end.                                      | असत्य (नहीं) |
| entityType?     | स्ट्रिंग | Event Type.                                                   | असत्य (नहीं) |
| entityMetadata? | स्ट्रिंग | Event metadata.                                               | असत्य (नहीं) |
| image?          | स्ट्रिंग | Image/Thumbnail of the scheduled event.                       | असत्य (नहीं) |
| reason?         | स्ट्रिंग | The reason which will be displayed in the guild's audit logs. | असत्य (नहीं) |
