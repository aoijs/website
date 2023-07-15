---
title: '$modifyApplicationCommand'
description: '$modifyApplicationCommand will modify an existing application command.'
id: modifyApplicationCommand
---

`$modifyApplicationCommand` will modify an existing application command.

## Modo de uso

```php
$modifyApplicationCommand[guildID/global;appID;name:description:type:options:defaultPermission;...options]
```

## Parámetros

| Campo          | Tipo            | Parámetros                                                                              | Requerido |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:---------:|
| guildID/global | integer, string | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | verdadero |
| appID          | entero          | Application command ID.                                                                 | verdadero |
| ...options     | object          | New data for the application command.                                                   |    sí     |