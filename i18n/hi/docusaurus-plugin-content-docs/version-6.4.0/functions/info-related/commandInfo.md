---
title: '$commandInfo'
description: '$commandInfo will return the given text of a property.'
id: commandInfo
---

`$commandInfo` will return the given text of a property.

## प्रोयोग

```php
$commandInfo[name;option]
```

## पैरामीटर्स

| फील्ड  | टाइप     | डिस्क्रिप्शन           | चाहिए |
| ------ | -------- | ---------------------- |:-----:|
| name   | स्ट्रिंग | Command name or alias. | true  |
| option | स्ट्रिंग | Property to retrieve.  | true  |

## ट्रू (हा)

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