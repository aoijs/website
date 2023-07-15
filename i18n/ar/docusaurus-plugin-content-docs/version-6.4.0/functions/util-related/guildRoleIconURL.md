---
title: '$guildRoleIconURL'
description: '$guildRoleIconURL will retrieve the image URL of the role icon.'
id: guildRoleIconURL
---

`$guildRoleIconURL` will retrieve the image URL of the role icon.

## الاستخدام

```php
$guildRoleIconURL[guildId?;roleId]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                   | مطلوب |
| -------- | ------- | ---------------------------------------------- |:-----:|
| guildId? | Integer | ID of the guild where the role exists.         | false |
| roleId   | Integer | ID of the role you want to check if it exists. | true  |

## مثال

This will return the image URL of the role icon:

```javascript
bot.command({
    name: 'guildRoleIconURL',
    code: `
  $guildRoleIconURL[$guildID;900004369355931729]
  `
});
```