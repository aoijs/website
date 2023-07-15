---
title: '$createApplicationCommand'
description: '$createApplicationCommand will create an application command.'
id: createApplicationCommand
---

`$createApplicationCommand` will create an application command.

## प्रोयोग

```php
$createApplicationCommand[guildID/global;name;description;defaultPermission;type?;options?]
```

## पैरामीटर्स

| फील्ड              | टाइप            | डिस्क्रिप्शन                                                                            |    चाहिए     |
| ------------------ | --------------- | --------------------------------------------------------------------------------------- |:------------:|
| guildID/global     | string. integer | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** |     true     |
| name               | स्ट्रिंग        | Application command name, must be lowercase.                                            |     true     |
| डिस्क्रिप्शन       | स्ट्रिंग        | Application command description.                                                        |     true     |
| defaultPermissions | boolean         | If the command should follow the default permissions.                                   |     true     |
| टाइप?              | स्ट्रिंग        | The application command type. (slash/user/message)                                      | असत्य (नहीं) |
| options?           | स्ट्रिंग        | Application command options.                                                            | असत्य (नहीं) |

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

## ट्रू (हा)

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