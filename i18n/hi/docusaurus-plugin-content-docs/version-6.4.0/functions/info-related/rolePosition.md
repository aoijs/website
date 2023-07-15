---
title: '$rolePosition'
description: '$rolePosition will return the role position of a specific role.'
id: rolePosition
---

`$rolePosition` will return the role position of a specific role.

## प्रोयोग

```php
$rolePosition[roleID;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन  |    चाहिए     |
| -------- | ------- | ------------- |:------------:|
| roleID   | integer | The role ID.  |     true     |
| guildID? | integer | The guild ID. | असत्य (नहीं) |

## ट्रू (हा)

This will return the role position of any role you might like, for this example, we'll use the `@everyone` role:

```javascript
bot.command({
    name: 'rolePosition',
    code: `
  $rolePosition[$guildID]
  `
});
```
