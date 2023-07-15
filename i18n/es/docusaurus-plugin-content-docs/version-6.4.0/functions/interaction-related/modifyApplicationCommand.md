---
title: '$modifyApplicationCommand'
description: '$modifyApplicationCommand creará un comando de aplicación.'
id: modifyApplicationCommand
---

`$modifyApplicationCommand` modificará un comando de aplicación existente.

## Uso

```php
$modifyApplicationCommand[servidorID/global;appID;nombre:descripcion:tipo:opciones:Permiso predeterminado;...opciones]
```

## Parámetros

| Campo             | Tipo           | Parámetros                                                                                        | Requerido |
| ----------------- | -------------- | ------------------------------------------------------------------------------------------------- |:---------:|
| servidorID/global | entero, cadena | Tipo de comando de aplicación. <br/> 1. **global** <br/> 2. **un guildID específico** | verdadero |
| appID             | entero         | Tipo de comando de aplicación.                                                                    | verdadero |
| ...opciones       | objeto         | Nuevos datos para el comando de aplicación.                                                       | verdadero |