---
title: Subcommand Groups
description: This page covers everything about Subcommand Groups of Application Commands.
id: interaction-subcommandgroups
og_image: /src/images/og/3.png
sidebar:
  order: 3
---

<!-- omit from toc -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Sub command groups](#sub-command-groups)
- [Creating Application Commands](#creating-application-commands)
  - [Examples of creating Application Commands with sub command groups](#examples-of-creating-application-commands-with-sub-command-groups)
  - [Preview of the Example](#preview-of-the-example)
- [Replying to Sub commands/groups](#replying-to-sub-commandsgroups)

---

## Sub command groups

Sub-commands are apart of slash commands and are used to add as the name already suggest sub commands to the regular slash command. Which does not only "bypass" the slash command limit but also allows you to properly structure your application commands.

## Creating Application Commands

```js
$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message);options?]
```

| Field             | Type                                                                                                                                                                                                 | Description                                                                                                    | Required |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | :------: |
| guildID/global    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)  | The type of application command, either for every guild (global) or for one specific guild (specific guildID). |   true   |
| name              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The actual slash command name that will be visible to the user.                                                |   true   |
| description       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The slash command description that will be visible to the user.                                                |   true   |
| defaultPermission | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | If the application command should syncronisate to the default permissions.                                     |   true   |
| type              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The application command type (explained below)                                                                 |   true   |
| options?          | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)                                                                                                    | Slash commands options.                                                                                        |   true   |

### Examples of creating Application Commands with sub command groups

The official documentation can be found [here](https://discord.com/developers/docs/interactions/application-commands#subcommands-and-subcommand-groups)

```js
client.command({
  name: "createApplicationCommand",
  code: `
  $createApplicationCommand[guildID/global;moderation;Moderation Commands!;true;slash;[{
            "name": "user",
            "description": "Get or edit permissions for a user",
            "type": 2, // 2 is type SUB_COMMAND_GROUP
            "options": [
                {
                    "name": "get",
                    "description": "Get permissions for a user",
                    "type": 1 // 1 is type SUB_COMMAND
                },
                {
                    "name": "edit",
                    "description": "Edit permissions for a user",
                    "type": 1
                }
            ]
        },
        {
            "name": "role",
            "description": "Get or edit permissions for a role",
            "type": 2,
            "options": [
                {
                    "name": "get",
                    "description": "Get permissions for a role",
                    "type": 1
                },
                {
                    "name": "edit",
                    "description": "Edit permissions for a role",
                    "type": 1
                }
            ]
        }
    ]
}]`
});
```

### Preview of the Example

![preview](https://discord.com/assets/4cfea1bfc6d3ed0396c16cd47e0a7154.png)

## Replying to Sub commands/groups

To interact with those we need to filter the different options of the "moderation" slash commands. We can do that with `$onlyIf` and some advanced functions.

```js
$onlyIf[$interactionData[options._subcommand]==sub_command_name;]
```

`$interactionData` contains information about the interaction, and we use `$onlyIf` to check if the subcommand matches ours.

This will basically check for the sub command name and if it doesn't match it will block the command, so for our case it would look something like this..
