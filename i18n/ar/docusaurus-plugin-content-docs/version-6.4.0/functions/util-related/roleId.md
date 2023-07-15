---
title: '$roleId'
description: '$roleId will return the ID of a role.'
id: roleId
---

`$roleId` will return the ID of a role.

## الاستخدام

```php
$roleId[roleResolver;guildID?]
```

## البارامترات

| Field        | النوع  | الديسكبربشين                                   | مطلوب |
| ------------ | ------ | ---------------------------------------------- |:-----:|
| roleResolver | string | Name of the role.                              | true  |
| guildID?     | string | ID of the guild where the role was created in. | false |

## مثال

This will return the role ID of a role called `Owner` (this example won't work if you dont have that role):

```javascript
bot.command({
    name: 'roleId',
    code: `
  $roleId[Owner;$guildID]
  `
});
```