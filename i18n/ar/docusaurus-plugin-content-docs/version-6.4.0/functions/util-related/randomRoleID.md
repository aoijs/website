---
title: '$randomRoleID'
description: '$randomRoleID will return a random role ID of a given guild.'
id: randomRoleID
---

`$randomRoleID` will return a random role ID of a given guild.

## الاستخدام

```php
$randomRoleID[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                  | مطلوب |
| -------- | ------- | --------------------------------------------- |:-----:|
| guildID? | Integer | Where it will return the random role ID from. | true  |

## مثال

This will return a random role ID of your guild:

```javascript
bot.command({
    name: 'randomRoleID',
    code: `
  $randomRoleID[$guildID]
  `
});
```
