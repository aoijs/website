---
title: $archiveThread
description: $archiveThread will archive or unarchive a specific thread.
id: archiveThread
---

`$archiveThread` will archive or unarchive a specific thread.

## Usage

```php
$archiveThread[threadID;channelID?;archive?;reason?]
```

## Parameters

| Field                                        | Type                                                                                                | Description                                              | Required |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | :------: |
| threadID                                     | integer                                                                                             | Thread ID.                                               |   true   |
| channelID?                                   | integer                                                                                             | Channel ID of where the thread is located.               |  false   |
| archive?                                     | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| JavaScript/Reference/Global_Objects/Boolean) | Archive the given thread?                                                                           | false                                                    |
| reason?                                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Reason that will be displayed in the guild's audit logs. |  false   |

## Example(s)

This will archive the created thread:

```javascript
client.command({
  name: "archiveThread",
  code: `
  $archiveThread[$channelID;$get[id];true;testing]
  $let[id;$createThread[$channelID;example;1440;public;$messageID;true]]  
  `,
});
```
