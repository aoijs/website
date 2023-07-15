---
title: '$createThread'
description: '$createThread will create a new thread.'
id: createThread
---

`$createThread` will create a new thread.

## प्रोयोग

```php
$createThread[channelID;name;archive;type;startMessage;returnId?]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                                                                 |    चाहिए     |
| ------------ | -------- | ---------------------------------------------------------------------------- |:------------:|
| channelID    | integer  | The channel ID of where the thread should be created in.                     |     true     |
| name         | स्ट्रिंग | The name of the newly created thread.                                        |     true     |
| achieve      | स्ट्रिंग | After how much time the thread will be achieved (ms).                        |     true     |
| टाइप         | स्ट्रिंग | Thread type <br /> 1. **public** (default) <br /> 2. **private** |     true     |
| startMessage | स्ट्रिंग | The message ID of where the thread should relate to.                         |     true     |
| returnId?    | स्ट्रिंग | If the function should return the thread ID after its creation.              | असत्य (नहीं) |

* **60 —** This option makes the thread stays active for **1 hour**.
* **1440 —** This option makes the thread stays active for **1 day**.
* **4320 —** This option makes the thread stays active for **3 days**.
* **10080 —** This option makes the thread stays active for **1 week**.
* **MAX —** This option makes the thread stays active for the highest possible time.

## ट्रू (हा)

This will create a thread in the current channel:

```javascript
bot.command({
    name: 'createThread',
    code: `
  $createThread[$channelID;Example!;60;public;$messageID;false]
  `
});
```
