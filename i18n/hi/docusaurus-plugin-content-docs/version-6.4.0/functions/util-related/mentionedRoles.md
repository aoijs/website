---
title: '$mentionedRoles'
description: '$mentionedRoles will return the ID of a role retrieved from a message, this works similar as `$mentioned`.'
id: mentionedRoles
---

`$mentionedRoles` will return the ID of a role retrieved from a message.

## प्रोयोग

```php
$mentionedRoles[index]
```

## पैरामीटर्स

| फील्ड | टाइप   | डिस्क्रिप्शन               | चाहिए |
| ----- | ------ | -------------------------- |:-----:|
| index | number | The index of the argument. | true  |

## ट्रू (हा)

This will return the ID of the **first** role mention if you attempt to mention any role in this command:

```javascript
bot.command({
    name: 'mentionedRoles',
    code: `
  $mentionedRoles[1]
  `
});
```
