---
title: '$commandInfo'
description: '$commandInfo will return the given text of a property.'
id: commandInfo
---

`$commandInfo` will return the given text of a property.

## الاستخدام

```php
$commandInfo[name;option]
```

## البارامترات

| Field  | النوع  | الديسكبربشين           | مطلوب |
| ------ | ------ | ---------------------- |:-----:|
| name   | string | Command name or alias. | true  |
| option | string | Property to retrieve.  | true  |

## مثال

This will return the usage (defined by added properties) of the command:

* You can add anything you'd like, for example "usage" as below.
* You can use aliases or the command name to return it's information.

```javascript
bot.command({
    name: 'commandInfo',
    aliases: ["ci", "cmdInfo"],
    usage: "commandInfo [command]",
    code: `
  Usage: $commandInfo[ci;usage]
  `
});
```