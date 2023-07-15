---
title: '$onlyForIDs'
description: '$onlyForIDs will check if the command was executed by any user of the listed user IDs and return a error if not.'
id: onlyForIDs
---

`$onlyForIDs` will check if the command was executed by any user of the listed user IDs and return a error if not.

## الاستخدام

```php
$onlyForIDs[...userIds;error]
```

## البارامترات

| Field      | النوع           | الديسكبربشين                                                                  | مطلوب |
| ---------- | --------------- | ----------------------------------------------------------------------------- |:-----:|
| ...userIds | string, integer | Users you want to limit the command to.                                       | true  |
| error      | string          | Error to return when the command was not executed by and of the listed users. | true  |

## مثال

This will limit the command to bot developers only:

```javascript
bot.command({
    name: "onlyForIDs",
    code: `
    Ok.
    $onlyForIDs[$botOwnerID;You can't use that command!]
    `
});
```