---
title: '$removeApplicationCommandPermissions'
description: '$removeApplicationCommandPermissions will remove permissions of a user or role of a specific application command.'
id: removeApplicationCommandPermissions
---

`$removeApplicationCommandPermissions` will remove permissions of a user or role of a specific application command.

## الاستخدام

```php
$removeApplicationCommandPermissions[guildID/global;id;...roruIds]
```

## البارامترات

| Field          | النوع           | الديسكبربشين                                                                            | مطلوب |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:-----:|
| guildID/global | Integer         | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | true  |
| id             | Integer         | The application command ID to modify.                                                   | true  |
| roruIds        | integer, string | Roles or users to modify/remove permissions of, splitted by commas.                     | true  |
