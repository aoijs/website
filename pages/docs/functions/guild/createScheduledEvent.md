---
title: $createScheduledEvent
description: $createScheduledEvent will create a scheduled event.
id: createScheduledEvent
---

`$createScheduledEvent` will create a scheduled event.

## Usage

```php
$createScheduledEvent[channelID;name;description;startTime;endTime?;entityType?;entityMetadata?;image?;reason?]
```

## Parameters

| Field           | Type                                                                                              | Description                                                   | Required |
| --------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | :------: |
| channelID       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Where the event will be held.                                 |   true   |
| name            | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The event title                                               |   true   |
| description     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The description of the event.                                 |   true   |
| startTime       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | When the event will start.                                    |   true   |
| endTime?        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | When the event will end.                                      |  false   |
| entityType?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Event Type.                                                   |  false   |
| entityMetadata? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Event metadata.                                               |  false   |
| image?          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Image/Thumbnail of the scheduled event.                       |  false   |
| reason?         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The reason which will be displayed in the guild's audit logs. |  false   |
