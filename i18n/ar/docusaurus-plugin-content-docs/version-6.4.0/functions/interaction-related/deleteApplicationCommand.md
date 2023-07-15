---
title: '$deleteApplicationCommand'
description: '$deleteApplicationCommand will delete an application command.'
id: deleteApplicationCommand
---

`$deleteApplicationCommand` will delete an application command.

## الاستخدام

```php
$deleteApplicationCommand[guildID/global;id]
```

## البارامترات

| Field          | النوع           | الديسكبربشين                                                                            | مطلوب |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:-----:|
| guildID/global | string, integer | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | true  |
| id             | Integer         | Application command ID which will be deleted.                                           | true  |

## مثال

```javascript
bot.command({
    name: 'deleteApplicationCommand',
    code: `
  $deleteApplicationCommand[$guildID;$getApplicationCommandID[application-command-name;$guildID]]
  `
});
```
