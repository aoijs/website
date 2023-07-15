---
title: '$onlyClientPerms'
description: '$onlyClientPerms will check if the bot has the listed permission and return a error message if not.'
id: onlyClientPerms
---

`$onlyClientPerms` will check if the bot has the listed permission and return a error message if not.

## الاستخدام

```php
$onlyClientPerms[...perms;error]
```

## البارامترات

| Field    | النوع  | الديسكبربشين                                                 | مطلوب |
| -------- | ------ | ------------------------------------------------------------ |:-----:|
| ...perms | string | Permission that the bot requires.                            | true  |
| error    | string | Error to return when the bot has not the listed permissions. | true  |

You can find all permissions __[here](../../guides/client/2permissionsintents.md)__.

## مثال

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
