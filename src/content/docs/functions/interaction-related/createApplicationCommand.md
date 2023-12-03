---
title: $createApplicationCommand
description: $createApplicationCommand will create an application command.
id: createApplicationCommand
---

`$createApplicationCommand` will create an application command.

## Usage

```php
$createApplicationCommand[guildID/global;name;description;defaultPermission;type?;options?]
```

## Parameters

| Field              | Type                                                                                                                                                                                                 | Description                                                                 | Required |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | :------: |
| guildID/global     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number) | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** |   true   |
| name               | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Application command name, must be lowercase.                                |   true   |
| description        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Application command description.                                            |   true   |
| defaultPermissions | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                  | If the command should follow the default permissions.                       |   true   |
| type?              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The application command type. (slash/user/message)                          |  false   |
| options?           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Application command options.                                                |  false   |

<details>
  <summary><h3> Application Command Option Type </h3></summary>

| NAME              | ID  | NOTE                                                                                         |
| ----------------- | --- | -------------------------------------------------------------------------------------------- |
| SUB_COMMAND       | 1   |                                                                                              |
| SUB_COMMAND_GROUP | 2   |                                                                                              |
| STRING            | 3   |                                                                                              |
| NUMBER            | 4   | Any Number between -2^53 and 2^53                                                            |
| BOOLEAN           | 5   |                                                                                              |
| USER              | 6   |                                                                                              |
| CHANNEL           | 7   | Includes all channel types + categories                                                      |
| ROLE              | 8   |                                                                                              |
| MENTIONABLE       | 9   | Includes users and roles                                                                     |
| NUMBER            | 10  | Any double between -2^53 and 2^53                                                            |
| ATTACHMENT        | 11  | [attachment](https://discord.com/developers/docs/resources/channel#attachment-object) object |

**You can find more information in the [official documentation of Discord's API](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type).**

</details>

## Example(s)

**Check the Slash Command/Interaction guide for more information about slash commands!**

This will create a slash command without options:

```js
client.command({
  name: "createApplicationCommand",
  code: `
  $createApplicationCommand[$guildID/global;example;slash command description!;true;slash]`
});
// Will create a slash commands without any user input, you can choose between global/$guildID to create a command globally or only for a specific guild.
```
