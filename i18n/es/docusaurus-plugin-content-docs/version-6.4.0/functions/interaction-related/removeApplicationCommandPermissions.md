---
title: '$removeApplicationCommandPermissions'
description: '$removeApplicationCommandPermissions eliminará los permisos de un usuario o un rol de un comando específico de una aplicación.'
id: removeApplicationCommandPermissions
---

`$removeApplicationCommandPermissions` eliminará los permisos de un usuario o rol de un comando específico de la aplicación.

## Uso

```php
$removeApplicationCommandPermissions[servidorID/global;id;...roruIds]
```

## Parámetros

| Campo             | Tipo           | Parámetros                                                                                        | Requerido |
| ----------------- | -------------- | ------------------------------------------------------------------------------------------------- |:---------:|
| servidorID/global | entero         | Tipo de comando de aplicación. <br/> 1. **global** <br/> 2. **un guildID específico** | verdadero |
| id                | entero         | Tipo de comando de aplicación.                                                                    | verdadero |
| roruID            | entero, cadena | Funciones o usuarios para modificar/remover los permisos, divididos por comas.                    | verdadero |
