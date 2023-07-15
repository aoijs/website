---
title: '$setApplicationCommandPermissions'
description: '$setApplicationCommandPermissions will set the permissions of a specific application command.'
id: setApplicationCommandPermissions
---

`$setApplicationCommandPermissions` will set the permissions of a specific application command.

## Використання

```php
$setApplicationCommandPermissions[guildID/global;ID;...perms]
```

## Параметри

| Поле           | Тип             | Опис                                                                                    | Обов'язковий |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:------------:|
| guildID/global | integer, string | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** |     так      |
| ID             | integer         | Application command ID.                                                                 |     так      |
| ...perms       | рядок           | Permissions to change.                                                                  |     так      |