---
title: '$setApplicationCommandPermissions'
description: '$setApplicationCommandPermissions will set the permissions of a specific application command.'
id: setApplicationCommandPermissions
---

`$setApplicationCommandPermissions` will set the permissions of a specific application command.

## الاستخدام

```php
$setApplicationCommandPermissions[guildID/global;ID;...perms]
```

## البارامترات

| Field          | النوع           | الديسكبربشين                                                                            | مطلوب |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:-----:|
| guildID/global | integer, string | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | true  |
| ID             | Integer         | Application command ID.                                                                 | true  |
| ...perms       | string          | Permissions to change.                                                                  | true  |