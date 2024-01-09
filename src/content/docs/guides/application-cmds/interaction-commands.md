---
title: Interaction Commands
description: This guide will be covering the basics about Interaction Commands and their functionality. As well as everything else you might need to know.
id: interactioncommands
og_image: /src/images/og/3.png
sidebar:
  order: 1
---

<!-- omit from toc -->

### Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Inviting your bot with correct permissions](#inviting-your-bot-with-correct-permissions)
- [Important](#important)
- [Creating Application Commands](#creating-application-commands)
    - [Application Types](#application-types)
  - [Examples of creating Application Commands](#examples-of-creating-application-commands)
- [Conclusion](#conclusion)
- [Application Command Option Type](#application-command-option-type)

---

## Introduction

Application Commands make it much easier for us to use our favourite bots on Discord. All you need to do is type `/` followed by the command you want to use or right click a message, and your favourite bot will do the rest.

Application Commands make it simpler for users to discover what a bot can do, and they can also find new features as they are added. Validation, error states, and a user-friendly interface guide users through the commands, so they can quickly get the results they need without confusion or frustration. Plus, they allow users to keep the mental model of how they think about the bot separate from how it actually works, which makes it easier for everyone to understand and use the bot.

Using Application Commands offers a few benefits, like the ability to quickly and easily access the features of a bot, a user-friendly interface to guide users through commands, and the ability to separate the user's mental model from the workings of the bot. All of this makes it simpler for users to use the bot, so they can get the most out of it.

## Getting Started

### Inviting your bot with correct permissions

In order to use Application Commands, your bot requires the `application.commands` scope which can be found on
the [Discord Developer Portal](https://discord.com/developers/applications/). You don't have to kick your bot or
anything, simply reinvite it.

![scope](https://media.discordapp.net/attachments/1061712111052521493/1062539303386873929/image_5.png?width=1200&height=447)

## Important

- Due to Discord's Limitation you can only have up to **50 slash commands** in your bot / per guild.
- Two Application commands can **not have the same name** in the same guild.
- Application command names can **not contain special symbols (this includes spaces)** and must be shorter than **32 characters**.
- You require `events: ["onMessage", "onInteractionCreate"]` in your main file.

![slash-example](https://cdn.discordapp.com/attachments/1061712111052521493/1062559509601591427/image_6.png)

## Creating Application Commands

```js
$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message);options?]
```

| Field             | Type                                                                                                                                                                                                 | Description                                                                                                    | Required |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | :------: |
| guildID/global    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The type of application command, either for every guild (global) or for one specific guild (specific guildID). |   true   |
| name              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The actual slash command name that will be visible to the user.                                                |   true   |
| description       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The slash command description that will be visible to the user.                                                |   true   |
| defaultPermission | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | If the application command should syncronisate to the default permissions.                                     |   true   |
| type              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The application command type (explained below)                                                                 |   true   |
| options?          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)                                                                                                    | [Slash commands options](#examples-of-creating-application-commands).                                          |   true   |

#### Application Types

> - `message` — Creates an Application Command that can be executed on a message. ([documentation](https://discord.com/developers/docs/interactions/application-commands#message-commands))
> - `slash` — Creates an Application Command as slash command. ([documentation](https://discord.com/developers/docs/interactions/application-commands))
> - `user` — Creates an Application Command that can be executed on a user. ([documentation](https://discord.com/developers/docs/interactions/application-commands#user-commands))

### Examples of creating Application Commands

```js
client.command({
  name: "createApplicationCommand",
  code: `
  $createApplicationCommand[guildID/global;example;slash command description!;true;slash]`
});
```

## Conclusion

Interaction Commands are an incredibly useful tool for developing interactive bots. They can be used to create robust
interactions with users, and make it easier to manage commands and features. We hope this guide has been helpful in
learning how to use Interaction Commands and the basics of how they work.

## [Application Command Option Type](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type)

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
