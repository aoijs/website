---
title: '$isRoleManaged'
description: '$isRoleManaged will check if a certain role is managed by Discord.'
id: isRoleManaged
---

`$isRoleManaged` will check if a certain role is managed by Discord.

## प्रोयोग

```php
$isRoleManaged[roleID;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                                        |    चाहिए     |
| -------- | ------- | ------------------------------------------------------------------- |:------------:|
| roleID   | integer | ID of the role you want to check if it's managed by Discord or not. |     true     |
| guildID? | integer | ID of the guild where the role exists.                              | असत्य (नहीं) |

## ट्रू (हा)

This will check if a role called `Server Booster` is managed by Discord and return either `true` or `false`:

```javascript
bot.command({
    name: 'isRoleManaged',
    code: `
  $isRoleManaged[$findRole[Server Booster];$guildID]
  `
});
```
