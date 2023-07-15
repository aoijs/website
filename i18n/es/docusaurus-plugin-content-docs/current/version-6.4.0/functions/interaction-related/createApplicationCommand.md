---
title: '$createApplicationCommand'
description: '$createApplicationCommand will create an application command.'
id: createApplicationCommand
---

`$createApplicationCommand` will create an application command.

## Modo de uso

```php
$createApplicationCommand[guildID/global;name;description;defaultPermission;type?;options?]
```

## Parámetros

| Campo              | Tipo           | Descripción                                                                             | Requerido |
| ------------------ | -------------- | --------------------------------------------------------------------------------------- |:---------:|
| guildID/global     | string. entero | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** |    sí     |
| name               | string         | Application command name, must be lowercase.                                            |    sí     |
| description        | string         | Application command description.                                                        |    sí     |
| defaultPermissions | boolean        | If the command should follow the default permissions.                                   |    sí     |
| tipo?              | cadena         | The application command type. (slash/user/message)                                      |    no     |
| opciones?          | string         | Application command options.                                                            |   falso   |

<details>
  <summary><h3> Application Command Option Type </h3></summary>

| NAME                | ID | NOTE                                                                                         |
| ------------------- | -- | -------------------------------------------------------------------------------------------- |
| SUB_COMMAND         | 1  |                                                                                              |
| SUB_COMMAND_GROUP | 2  |                                                                                              |
| STRING              | 3  |                                                                                              |
| INTEGER             | 4  | Any Integer between -2^53 and 2^53                                                           |
| BOOLEAN             | 5  |                                                                                              |
| USER                | 6  |                                                                                              |
| CHANNEL             | 7  | Includes all channel types + categories                                                      |
| ROLE                | 8  |                                                                                              |
| MENTIONABLE         | 9  | Includes users and roles                                                                     |
| NUMBER              | 10 | Any double between -2^53 and 2^53                                                            |
| ATTACHMENT          | 11 | [attachment](https://discord.com/developers/docs/resources/channel#attachment-object) object |

**You can find more information in the [official documentation of Discord's API](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type).**

</details>

## Ejemplo(s)

**Check the Slash Command/Interaction guide for more information about slash commands!**

This will create a slash command without options:

```js
bot.command({
    name: "createApplicationCommand",
    code: `
  $createApplicationCommand[$guildID/global;example;slash command description!;true;slash]`
});
// Will create a slash commands without any user input, you can choose between global/$guildID to create a command globally or only for a specific guild.
```