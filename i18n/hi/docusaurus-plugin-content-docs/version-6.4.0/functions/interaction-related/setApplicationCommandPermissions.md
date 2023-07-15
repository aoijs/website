---
title: '$setApplicationCommandPermissions'
description: '$setApplicationCommandPermissions will set the permissions of a specific application command.'
id: setApplicationCommandPermissions
---

`$setApplicationCommandPermissions` will set the permissions of a specific application command.

## प्रोयोग

```php
$setApplicationCommandPermissions[guildID/global;ID;...perms]
```

## पैरामीटर्स

| फील्ड          | टाइप            | डिस्क्रिप्शन                                                                            | चाहिए |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:-----:|
| guildID/global | integer, string | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | true  |
| ID             | integer         | Application command ID.                                                                 | true  |
| ...perms       | स्ट्रिंग        | Permissions to change.                                                                  | true  |