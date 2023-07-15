---
title: '$removeApplicationCommandPermissions'
description: '$removeApplicationCommandPermissions will remove permissions of a user or role of a specific application command.'
id: removeApplicationCommandPermissions
---

`$removeApplicationCommandPermissions` will remove permissions of a user or role of a specific application command.

## Modo de uso

```php
$removeApplicationCommandPermissions[guildID/global;id;...roruIds]
```

## Parámetros

| Campo          | Tipo            | Parámetros                                                                              | Requerido |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:---------:|
| guildID/global | entero          | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | verdadero |
| id             | entero          | The application command ID to modify.                                                   | verdadero |
| roruIds        | integer, string | Roles or users to modify/remove permissions of, splitted by commas.                     |    sí     |
