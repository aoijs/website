---
title: '$onlyClientPerms'
description: '$onlyClientPerms will check if the bot has the listed permission and return a error message if not.'
id: onlyClientPerms
---

`$onlyClientPerms` will check if the bot has the listed permission and return a error message if not.

## प्रोयोग

```php
$onlyClientPerms[...perms;error]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                 | चाहिए |
| -------- | -------- | ------------------------------------------------------------ |:-----:|
| ...perms | स्ट्रिंग | Permission that the bot requires.                            | true  |
| error    | स्ट्रिंग | Error to return when the bot has not the listed permissions. | true  |

You can find all permissions __[here](../../guides/Client/2permissionsintents.md)__.

## ट्रू (हा)

This will limit the command to work only when the Bot has administrator permissions:

```javascript
bot.command({
    name: "onlyClientPerms",
    code: `
    Ok.
    $onlyClientPerms[administrator;I don't have administrator permissions!]
    `
});
```
