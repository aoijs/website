---
title: Interaction Commands
description: This guide will be covering the basics about Slash Commands and their functionality. As well as everything else you might need to know.
id: interactioncommands
---

:::info  
This guide is subject to change, meaning not everything may be listed here.  
:::

### Table of Content

- **[Introduction][introduction]**
- **[Getting Started][getting-started]**
    - **[Inviting your bot with correct permissions][getting-started-sub-inviting-your-bot-with-correct-permissions]**
    - **[Discord Developer Portal - Documentation][3]**
- **[Important][important]**
- **[Creating Application Commands][creating-application-commands]**
    - **[Application Types](#application-types)**
    - **[Multiple Examples of creating Application Commands](#examples-of-creating-application-commands)**
- **[Using Application Commands][using-application-commands]**
    - **[Auto Complete Respond][6]**
- **[Application Command Option Type][application-command-option-type]**
    - **[Discord Developer Portal - Documentation][4]**
- **[Interaction Functions][interaction-functions]**

---

## Introduction

Slash Commands make it much easier for us to use our favourite bots on Discord. All you need to do is type `/` followed by the command you want to use, and your favourite bot will do the rest.

Slash Commands make it simpler for users to discover what a bot can do, and they can also find new features as they are added. Validation, error states, and a user-friendly interface guide users through the commands, so they can quickly get the results they need without confusion or frustration. Plus, they allow users to keep the mental model of how they think about the bot separate from how it actually works, which makes it easier for everyone to understand and use the bot.

Using Slash Commands offers a few benefits, like the ability to quickly and easily access the features of a bot, a user-friendly interface to guide users through commands, and the ability to separate the user's mental model from the workings of the bot. All of this makes it simpler for users to use the bot, so they can get the most out of it.

![slash](https://cdn.discordapp.com/attachments/1061712111052521493/1062518328268169306/image_4.png)

## Getting Started

### Inviting your bot with correct permissions

In order to use Application Commands, your bot requires the `application.commands` scope which can be found on
the [Discord Developer Portal](https://discord.com/developers/applications/). You don't have to kick your bot or
anything, simply reinvite it.

![scope](https://media.discordapp.net/attachments/1061712111052521493/1062539303386873929/image_5.png?width=1200&height=447)

## Important

* Due to Discord's Limitation you can only have up to **50 slash commands** in your bot / per guild.
* Two Application commands can **not have the same name** in the same guild.
* Application command names can **not contain special symbols** and must be shorter than **32 characters**.
* You require `events: ["onMessage", "onInteractionCreate"]` in your main file.

![slash-example](https://cdn.discordapp.com/attachments/1061712111052521493/1062559509601591427/image_6.png)

## Creating Application Commands

```js
$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message);options?]
```

| Field             | Type            | Description                                                                                                    | Required |
| ----------------- | --------------- | -------------------------------------------------------------------------------------------------------------- | :------: |
| guildID/global    | string, integer | The type of application command, either for every guild (global) or for one specific guild (specific guildID). |   true   |
| name              | string, number  | The actual slash command name that will be visible to the user.                                                |   true   |
| description       | string, number  | The slash command description that will be visible to the user.                                                |   true   |
| defaultPermission | string          | If the application command should syncronisate to the default permissions.                                     |   true   |
| type              | string          | The application command type (explained below)                                                                 |   true   |
| options?          | object          | [Slash commands options](#examples-of-creating-application-commands).                                          |   true   |

#### Application Types

> * `message` — Creates an Application Command that can be executed on a message. ([documentation](https://discord.com/developers/docs/interactions/application-commands#message-commands))
> * `slash` — Creates an Application Command as slash command. ([documentation](https://discord.com/developers/docs/interactions/application-commands))
> * `user` — Creates an Application Command that can be executed on a user. ([documentation](https://discord.com/developers/docs/interactions/application-commands#user-commands))

### Examples of creating Application Commands

```js
bot.command({
    name: "createApplicationCommand",
    code: `
  $createApplicationCommand[guildID/global;example;slash command description!;true;slash]`
});
/* Will create a slash commands without any user input, you can choose between global/guildID to create a command globally or only for a specific guild.
Example created by dodoGames#7509. */
```

---

Adding **choices** to the application command:

**`"name"`** stands for the option that will be visible to the user.
**`"value"`** will be the response of the given value, for example if you choose "choice 1" you will get the response of "You picked choice 1!" and so on.

```js
bot.command({
    name: "createApplicationCommand",
    code: `
  $createApplicationCommand[$guildID;choice;slash command choices showcase!;true;slash;[{
  "name": "option",
  "description": "choice example",
  "required": true,
  "type": 3,
  "choices" : [{
    "name" : "choice 1",
    "value" : "You picked choice 1!"
  }, {
    "name" : "choice 2",
    "value" : "You picked choice 2!"
  }, {
    "name" : "choice 3",
    "value" : "You picked choice 3!"
  }]
}]]`
});
```

---

Sub command groups allow nesting of multiple commands in one single command, meaning you can increase the application command limit given by Discord.

This is an example structure of a slash command which has two sub-groups called "user" and "role". 

This example would create one slash command with two sub-groups and would looks like this <Slash>/permissions user</Slash> & <Slash>/permissions role</Slash>

```js
{
    "name": "permissions",
    "description": "Get or edit permissions for a user or a role",
    "options": [
        {
            "name": "user",
            "description": "Get or edit permissions for a user",
            "type": 2 // 2 is type SUB_COMMAND_GROUP
        },
        {
            "name": "role",
            "description": "Get or edit permissions for a role",
            "type": 2
        }
    ]
}
```

To create that slash command you would basically do the same as with any other.

```js
bot.command({
    name: "createApplicationCommand",
    code: `
  $createApplicationCommand[$guildID;slash command;sub commands showcase!;true;slash;[{
    "name": "permissions",
    "description": "Get or edit permissions for a user or a role",
    "options": [
        {
            "name": "user",
            "description": "Get or edit permissions for a user",
            "type": 2 
        },
        {
            "name": "role",
            "description": "Get or edit permissions for a role",
            "type": 2
        }
    ]
}]]`
});
```

The official documentation of Discord has other awesome [examples](https://discord.com/developers/docs/interactions/application-commands#example-walkthrough) regarding this.

---

Adding **sub commands** to the application command:

Sub commands have the type `1` and work different from "regular" slash commands. They have other "sub" commands "attached" to the actual command.

```js
bot.command({
    name: "createApplicationCommand",
    code: `
  $createApplicationCommand[$guildID;slash command;sub commands showcase!;true;slash;[{
    "name": "subcommand",
    "description": "an sub command example!",
    "type": 1,
    "options": [{
      "name": "user", 
      "description": "example option", 
      "required": true, 
      "type": 6
    }]
}]]`
});
```

To reply to sub commands you'd have to use an extra line of code as the following:

`$onlyIf[$interactionData[options._subcommand]==sub_slash_name;]` which would check if the executed sub command equals to the one that should execute. `$interactionData[options._subcommand]` returns the sub command name of the executed slash command.

```js
bot.interactionCommand({
  name: "slash",
  prototype: "slash",
  code: `
  $interactionReply[You picked $interactionData[options._subcommand]!]
  $onlyIf[$interactionData[options._subcommand]==subcommand;]`
});
// This example is referring to the example above.
```

## Using Application Commands

To use application commands you require `interaction` commands, which are different from default commands. You must provide `prototype` for your bot to know that the command "belongs" to an application command.

Usage in your Main file (in most cases called `index.js`):

```js
bot.interactionCommand({
    name: "slash command name", // name of the slash command
    prototype: "slash", // clarifying that this command belongs to a slash command 
    code: `code` // code that will be executed if slash command triggered
});
```

Usage in a **[Command Handler](../guides/3commandhandler.md)**:

```js
module.exports = [{
    name: "slash command name", // name of the slash command
    prototype: "slash", // clarifying that this command belongs to a slash command 
    type: "interaction", // clarifying that this command is an interaction command
    code: `code` // code that will be executed if slash command triggered
}]
```

You can retrive information given in slash commands by using `$slashOption[option]`.

```js
$createApplicationCommand[$guildID;say;Echo command!;true;slash;[{
    "name": "text",
    "description": "Text you want to say!",
    "required": true,
    "type": 3
}]]
// You must execute the code above at least once for the application command to appear.
```

```js
module.exports = [{
    name: "say",
    prototype: "slash",
    type: "interaction",
    code: `$interactionReply[You said: $slashOption[text]!]`
}]
```

---

### AutoCompleteRespond Functions & Examples

There are multiple ways of using `$autoCompleteRespond`, you can either use JSON or the simple aoi.js way.

#### Usage

```php
$autoCompleteRespond[OptionName;OptionReply;...]
```

```php
$autoCompleteRespond[[{ 
    "name" : "Option Name One",
    "value" : "Option Reply 1"
  }, {
    "name" : "Option Name Two",
    "value" : "Option Reply 2"
  }]]
```

Create the slash command, this will create a global application command with the name of "example" with an option which uses autoComplete:

```javascript
bot.command({
    name: 'createApplicationCommand',
    code: `
  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{
    "name": "option", 
    "description": "First option!",
    "required": false,
    "type": 3, 
    "autocomplete": true
}]]`
});
```

Checking if autoComplete equals `true`, if so it will respond with the given respond (addition of the code above):

```javascript
bot.command({
    name: "example",
    prototype: "slash",
    $if: "old",
    code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[First option;You selected the first option, therefore I'm responding with this!;Second option;You selected the first second, therefore I'm responding with this!]
  $else
  $interactionReply[$slashOption[option]]
  $endif
  `
});
```

Create the slash-command, this will create a global application command with the name "example": 

```javascript
bot.command({
    name: 'createApplicationCommand',
    code: `
  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{
    "name": "option",
    "description": "First option with autocomplete.",
    "required": false, 
    "type": 3,
    "autocomplete": true 
  }, {
    "name": "anotheroption",
    "description": "Another option.",
    "required": false,
    "type": 3
}]]`
});
```

Using JSON and checking if autoComplete equals `true`, if so it will respond with the given response :

```javascript
bot.command({
    name: "example",
    prototype: "slash",
    $if: "old",
    code: `
  $if[$isAutocomplete==true]
  $autoCompleteRespond[[{ 
    "name" : "First Option",
    "value" : "You selected the first option, therefore I\'m responding with this!"
  }, {
    "name" : "Second Option",
    "value" : "You selected the second option, therefore I\'m responding with this!"
  }]]
  $else
  $interactionReply[$slashOption[option] - autocomplete #SEMI# $slashOption[anotheroption] - false autocomplete;;;;everyone]
  $endif
  `
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
| INTEGER           | 4   | Any Integer between -2^53 and 2^53                                                           |
| BOOLEAN           | 5   |                                                                                              |
| USER              | 6   |                                                                                              |
| CHANNEL           | 7   | Includes all channel types + categories                                                      |
| ROLE              | 8   |                                                                                              |
| MENTIONABLE       | 9   | Includes users and roles                                                                     |
| NUMBER            | 10  | Any double between -2^53 and 2^53                                                            |
| ATTACHMENT        | 11  | [attachment](https://discord.com/developers/docs/resources/channel#attachment-object) object |

## Interaction Functions

* **[$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message) (optional);options (optional)]](../functions/interaction-related/createApplicationCommand.md)**
* **[$interactionReply[message;embeds?;components?;files?;allowedMentions?;ephemeral(true/false)?]](../functions/event-related/interactionReply.md)**
* **[$interactionDefer[ephemeral]](../functions/event-related/interactionDefer.md)**
* **[$interactionDeferUpdate[ephemeral]](../functions/event-related/interactionDeferUpdate.md)**
* **[$interactionDelete](../functions/event-related/interactionDelete.md)**
* **[$interactionEdit[content?;embeds?;components?;files?;allowedMentions]](../functions/event-related/interactionEdit.md)**
* **[$interactionFollowUp[content?;embeds?;components?;files?;ephemeral?]](../functions/event-related/interactionFollowUp.md)**
* **[$interactionUpdate[content?;embeds?;components?;files?;allowedMentions]](../functions/event-related/interactionUpdate.md)**
* **[$slashOption[option]](../functions/event-related/slashOption.md)**
* **[$deleteApplicationCommand[guildID/global;id]](../functions/interaction-related/deleteApplicationCommand.md)**
* **[$modifyApplicationCommand[guildID/global;commandID;name;description;type;options (optional);defaultPermission(optional)]](../functions/interaction-related/modifyApplicationCommand.md)**
* **[$removeApplicationCommandPermissions[guildID/global (optional : global as default);id;roruids]](../functions/interaction-related/removeApplicationCommandPermissions.md)**
* **[$getApplicationCommandOptions[name;guildID/global (optional : global as default)]](../functions/misc-related/getApplicationCommandOptions.md)**
* **[$getApplicationCommandID[name;guildID/global (optional : global as default)]](../functions/misc-related/getApplicationCommandID.md)**
* **[$autoCompleteRespond[OptionName;OptionReply;...]](../functions/interaction-related/autoCompleteRespond.md)**
* **[$isAutoComplete](../functions/interaction-related/isAutoComplete.md)**

[introduction]: #introduction
[getting-started]: #getting-started
[getting-started-sub-inviting-your-bot-with-correct-permissions]: #inviting-your-bot-with-correct-permissions
[important]: #important
[creating-application-commands]: #creating-application-commands
[using-application-commands]: #using-application-commands
[application-command-option-type]: #application-command-option-type
[interaction-functions]: #interaction-functions
[3]: https://discord.com/developers/docs/topics/gateway#list-of-intents
[4]: https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
[6]: #autocompleterespond-functions--examples