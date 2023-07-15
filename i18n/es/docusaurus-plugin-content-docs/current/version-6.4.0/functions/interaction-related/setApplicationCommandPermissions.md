---
title: '$setApplicationCommandPermissions'
description: '$setApplicationCommandPermissions will set the permissions of a specific application command.'
id: setApplicationCommandPermissions
---

`$setApplicationCommandPermissions` will set the permissions of a specific application command.

## Modo de uso

```php
$setApplicationCommandPermissions[guildID/global;ID;...perms]
```

## Parámetros

| Campo          | Tipo            | Parámetros                                                                              | Requerido |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:---------:|
| guildID/global | integer, string | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | verdadero |
| ID             | entero          | Application command ID.                                                                 | verdadero |
| ...permisos    | string          | Permissions to change.                                                                  |    sí     |