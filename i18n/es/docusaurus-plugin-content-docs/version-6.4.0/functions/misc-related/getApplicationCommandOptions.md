---
title: '$getApplicationCommandOptions'
description: '$getApplicationCommandOptions devolverá las opciones de la aplicación de un comando determinado.'
id: getApplicationCommandOptions
---

$getApplicationCommandOptions devolverá el ID de un comando de aplicación determinado.

## Uso

```php
$getApplicationCommandOptions[nombre;tipo?]
```

## Parámetros

| Campo  | Tipo   | Parámetros                                                                                                                | Requerido |
| ------ | ------ | ------------------------------------------------------------------------------------------------------------------------- |:---------:|
| nombre | cadena | Nombre del comando de la aplicación.                                                                                      | verdadero |
| tipo?  | cadena | Tipo de comando de aplicación. <br /> 1. **global** (default) <br /> 2. **guildID** (ID de gremio específico) |   falso   |