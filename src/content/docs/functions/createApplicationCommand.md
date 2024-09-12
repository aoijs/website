---
title: $createApplicationCommand
description: $createApplicationCommand will create an application command.
id: createApplicationCommand
---

`$createApplicationCommand` will create an application command.

## Usage

```aoi
$createApplicationCommand[type;name;description;permissions;integrationType?;context?;options?]
```

## Parameters

| Field              | Type                                                                                                                                                                                                 | Description                                                                                                 | Required |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | :------: |
| type               | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number) | Application command type. <br/> 1. **global** <br/> 2. **specific guildID**                                 |   true   |
| name               | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Application command name, must be lowercase.                                                                |   true   |
| description        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Application command description.                                                                            |   true   |
| permissions?       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | If the command should be restricted to certain permissions.                                                 |  false   |
| integrationType?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The application command integration type. <br/> 1. **user** <br/> 2. **guild**                              |  false   |
| context?           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The application command context. <br/>1. **botdm** <br/> 2. **dm** <br/> 3. **guild**                       |  false   |
| type?              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The application command type. <br/>1. **slash** <br/> 2. **user** <br/> 3. **message**                      |  false   |
| options?           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Application command options.                                                                                |  false   |

### Application Command Option Type

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

> You can find more information in the [official documentation of Discord's API](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type).

## Example(s)

> **Check the Slash Command/Interaction guide for more information about slash commands!**
> You can also use the [Application Command Creator](https://aoi.js.org/tools/slash/) to easily create your own custom application commands for your application.

This will create a guild slash command without options:

```js
client.command({
    name: "createApplicationCommand",
    code: `
  $createApplicationCommand[$guildID/global;example;slash command description!;false;guild;guild;slash]`
});
// Will create a slash commands without any user input, you can choose between global/$guildID to create a command globally or only for a specific guild.
```

This will create a guild slash command with restricted permissions, without options:

```js
client.command({
    name: "createApplicationCommand",
    code: `
  $createApplicationCommand[$guildID/global;example;slash command description!;managemessages;guild;guild;slash]`
});
// Will create a slash commands without any user input but with restricted permissions (managemessages), you can choose between global/$guildID to create a command globally or only for a specific guild.
```
