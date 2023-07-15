---
title: '$onlyForIDs'
description: '$onlyForIDs will check if the command was executed by any user of the listed user IDs and return a error if not.'
id: onlyForIDs
---

`$onlyForIDs` will check if the command was executed by any user of the listed user IDs and return a error if not.

## प्रोयोग

```php
$onlyForIDs[...userIds;error]
```

## पैरामीटर्स

| फील्ड      | टाइप            | डिस्क्रिप्शन                                                                  | चाहिए |
| ---------- | --------------- | ----------------------------------------------------------------------------- |:-----:|
| ...userIds | string, integer | Users you want to limit the command to.                                       | true  |
| error      | स्ट्रिंग        | Error to return when the command was not executed by and of the listed users. | true  |

## ट्रू (हा)

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