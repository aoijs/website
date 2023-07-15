---
title: '$createApplicationCommand'
description: '$createApplicationCommand creará un comando de aplicación.'
id: createApplicationCommand
---

`$createApplicationCommand` creará un comando de aplicación.

## Uso

```php
$createApplicationCommand[servidorID/global;nombre;descripcion;Permiso predeterminado;tipo?;opciones?]
```

## Parámetros

| Campo                | Tipo           | Descripción                                                                                       | Requerido |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------- |:---------:|
| servidorID/global    | cadena. entero | Tipo de comando de aplicación. <br/> 1. **global** <br/> 2. **un guildID específico** | verdadero |
| name                 | string         | Nombre del comando de la aplicación, debe estar en minúsculas.                                    | verdadero |
| descripción          | cadena         | Meta descripción de aplicación                                                                    | verdadero |
| Permisos por defecto | boolean        | Si el comando debe seguir los permisos por defecto.                                               | verdadero |
| tipo?                | cadena         | Tipo de comando de aplicación. (Slash/usuario/mensaje)                                            |   falso   |
| opciones?            | string         | Opciones de comando de la aplicación.                                                             |   falso   |

<details>
  <summary><h3> Tipo de comando de aplicación </h3></summary>

| NOMBRE              | ID | NOTA                                                                                       |
| ------------------- | -- | ------------------------------------------------------------------------------------------ |
| SUB_COMMAND         | 1  |                                                                                            |
| SUB_COMMAND_GROUP | 2  |                                                                                            |
| STRING              | 3  |                                                                                            |
| INTEGER             | 4  | Cualquier entero entre -2^53 y 2^53                                                        |
| BOOLEAN             | 5  |                                                                                            |
| USER                | 6  |                                                                                            |
| CHANNEL             | 7  | Incluye todos los tipos de canal + categorías                                              |
| ROLE                | 8  |                                                                                            |
| MENTIONABLE         | 9  | Incluye usuarios y roles                                                                   |
| NUMBER              | 10 | Cualquier entero entre -2^53 y 2^53                                                        |
| ATTACHMENT          | 11 | [adjuntar objeto](https://discord.com/developers/docs/resources/channel#attachment-object) |

**Puede encontrar más información en la [documentación oficial de la API](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type) de Discord.**

</details>

## Ejemplo(s)

**¡Revisa la guía de Slash Command/Interaction para más información sobre los comandos de barras!**

Esto creará un comando de barra sin opciones:

```js
bot.command({
    name: "createApplicationCommand",
    code: `
  $createApplicationCommand[$guildID/global;example;slash command description!;true;slash]`
});
// creará una barra de comandos sin ninguna entrada de usuario, puedes elegir entre global/$guildID para crear un comando globalmente o sólo para un gremio específico.
```