---
title: '$createThread'
description: '$createThread will create a new thread.'
id: createThread
---

`$createThread` will create a new thread.

## Використання

```php
$createThread[channelID;name;archive;type;startMessage;returnId?]
```

## Параметри

| Поле         | Тип     | Опис                                                                         | Обов'язковий |
| ------------ | ------- | ---------------------------------------------------------------------------- |:------------:|
| channelID    | integer | The channel ID of where the thread should be created in.                     |     так      |
| назва        | рядок   | The name of the newly created thread.                                        |     так      |
| achieve      | рядок   | After how much time the thread will be achieved (ms).                        |     так      |
| тип          | рядок   | Thread type <br /> 1. **public** (default) <br /> 2. **private** |     так      |
| startMessage | рядок   | The message ID of where the thread should relate to.                         |     так      |
| returnId?    | рядок   | If the function should return the thread ID after its creation.              |      ні      |

* **60 —** This option makes the thread stays active for **1 hour**.
* **1440 —** This option makes the thread stays active for **1 day**.
* **4320 —** This option makes the thread stays active for **3 days**.
* **10080 —** This option makes the thread stays active for **1 week**.
* **MAX —** This option makes the thread stays active for the highest possible time.

## Приклад(и)

This will create a thread in the current channel:

```javascript
bot.command({
    name: 'createThread',
    code: `
  $createThread[$channelID;Example!;60;public;$messageID;false]
  `
});
```
