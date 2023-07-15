---
title: '$removeApplicationCommandPermissions'
description: '$removeApplicationCommandPermissions will remove permissions of a user or role of a specific application command.'
id: removeApplicationCommandPermissions
---

`$removeApplicationCommandPermissions` will remove permissions of a user or role of a specific application command.

## प्रोयोग

```php
$removeApplicationCommandPermissions[guildID/global;id;...roruIds]
```

## पैरामीटर्स

| फील्ड          | टाइप            | डिस्क्रिप्शन                                                                            | चाहिए |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:-----:|
| guildID/global | integer         | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | true  |
| id             | integer         | The application command ID to modify.                                                   | true  |
| roruIds        | integer, string | Roles or users to modify/remove permissions of, splitted by commas.                     | true  |
