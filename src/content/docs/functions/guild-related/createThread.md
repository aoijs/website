---
title: $createThread
description: $createThread will create a new thread.
id: createThread
---

`$createThread` will create a new thread.

## Usage

```php
$createThread[channelID;name;archive;type;startMessage;returnId?]
```

## Parameters

| Field        | Type    | Description                                                      | Required |
| ------------ | ------- | ---------------------------------------------------------------- | :------: |
| channelID    | integer | The channel ID of where the thread should be created in.         |   true   |
| name         | string  | The name of the newly created thread.                            |   true   |
| archieve     | string  | After how much time the thread will be archieved (ms).           |   true   |
| type         | string  | Thread type <br /> 1. **public** (default) <br /> 2. **private** |   true   |
| startMessage | string  | The message ID of where the thread should relate to.             |   true   |
| returnId?    | string  | If the function should return the thread ID after its creation.  |  false   |

- **60 —** This option makes the thread stays active for **1 hour**.
- **1440 —** This option makes the thread stays active for **1 day**.
- **4320 —** This option makes the thread stays active for **3 days**.
- **10080 —** This option makes the thread stays active for **1 week**.
- **MAX —** This option makes the thread stays active for the highest possible time.

## Example(s)

This will create a thread in the current channel:

```javascript
bot.command({
  name: "createThread",
  code: `
  $createThread[$channelID;Example!;60;public;$messageID;false]
  `,
});
```
