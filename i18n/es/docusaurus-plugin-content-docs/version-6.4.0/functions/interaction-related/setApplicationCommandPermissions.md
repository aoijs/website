---
title: '$setApplicationCommandPermissions'
description: '$setApplicationCommandPermissions establecerá los permisos de un comando específico de la aplicación.'
id: setApplicationCommandPermissions
---

$setApplicationCommandPermissions establecerá los permisos de un comando específico de la aplicación.

## Uso

```php
$setApplicationCommandPermissions[servidorID/global;ID;...perms]
```

## Parámetros

| Campo             | Tipo           | Parámetros                                                                                        | Requerido |
| ----------------- | -------------- | ------------------------------------------------------------------------------------------------- |:---------:|
| servidorID/global | entero, cadena | Tipo de comando de aplicación. <br/> 1. **global** <br/> 2. **un guildID específico** | verdadero |
| ID                | entero         | ID del comando de aplicación.                                                                     | verdadero |
| ...permisos       | string         | Permisos para modificar.                                                                          | verdadero |