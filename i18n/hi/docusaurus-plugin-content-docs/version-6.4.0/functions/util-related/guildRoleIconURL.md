---
title: '$guildRoleIconURL'
description: '$guildRoleIconURL will retrieve the image URL of the role icon.'
id: guildRoleIconURL
---

`$guildRoleIconURL` will retrieve the image URL of the role icon.

## प्रोयोग

```php
$guildRoleIconURL[guildId?;roleId]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                   |    चाहिए     |
| -------- | ------- | ---------------------------------------------- |:------------:|
| guildId? | integer | ID of the guild where the role exists.         | असत्य (नहीं) |
| roleId   | integer | ID of the role you want to check if it exists. |     true     |

## ट्रू (हा)

This will return the image URL of the role icon:

```javascript
bot.command({
    name: 'guildRoleIconURL',
    code: `
  $guildRoleIconURL[$guildID;900004369355931729]
  `
});
```