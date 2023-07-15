---
title: '$isRoleManaged'
description: '$isRoleManaged will check if a certain role is managed by Discord.'
id: isRoleManaged
---

`$isRoleManaged` will check if a certain role is managed by Discord.

## الاستخدام

```php
$isRoleManaged[roleID;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                        | مطلوب |
| -------- | ------- | ------------------------------------------------------------------- |:-----:|
| roleID   | Integer | ID of the role you want to check if it's managed by Discord or not. | true  |
| guildID? | Integer | ID of the guild where the role exists.                              | false |

## مثال

This will check if a role called `Server Booster` is managed by Discord and return either `true` or `false`:

```javascript
bot.command({
    name: 'isRoleManaged',
    code: `
  $isRoleManaged[$findRole[Server Booster];$guildID]
  `
});
```
