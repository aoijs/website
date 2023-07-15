---
title: '$deleteApplicationCommand'
description: '$deleteApplicationCommand will delete an application command.'
id: deleteApplicationCommand
---

`$deleteApplicationCommand` will delete an application command.

## प्रोयोग

```php
$deleteApplicationCommand[guildID/global;id]
```

## पैरामीटर्स

| फील्ड          | टाइप            | डिस्क्रिप्शन                                                                            | चाहिए |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:-----:|
| guildID/global | string, integer | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | true  |
| id             | integer         | Application command ID which will be deleted.                                           | true  |

## ट्रू (हा)

```javascript
bot.command({
    name: 'deleteApplicationCommand',
    code: `
  $deleteApplicationCommand[$guildID;$getApplicationCommandID[application-command-name;$guildID]]
  `
});
```
