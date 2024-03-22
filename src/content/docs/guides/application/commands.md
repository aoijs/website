---
title: Interaction Commands
description: This guide covers the basics about Interaction Commands and their functionality, along with everything else you might need to know.
id: commands
type: guide
author: "dodogames"
author_url: "https://raw.githubusercontent.com/aoijs/website/main/src/images/contributors/dodogames.png"
edited_by: "Fafa"
edited_by_url: "https://raw.githubusercontent.com/aoijs/website/main/src/images/contributors/fafa.png"
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/3.png
tableOfContents: false
---

### Table of Contents

- [Introduction](#introduction)
- [What are slash commands](#what-are-slash-commands)
- [Notes](#notes)
- [Creating the slash command](#creating-the-slash-command)
- [Deleting the slash command](#deleting-the-slash-command)
- [Responding to the commands](#responding-to-the-commands)
- [Creating options](#creating-options)
- [Optional options](#optional-options)
  - [Note](#note)
- [DM Support](#dm-support)
    - [Note](#note-1)
    - [Configuring DM Support](#configuring-dm-support)
- [Frequently asked questions](#frequently-asked-questions)
    - [I have created a slash command but Discord does not show it for me](#i-have-created-a-slash-command-but-discord-does-not-show-it-for-me)
    - [Is `$createApplicationCommand` associated with `onInteractionCreate`?](#is-createapplicationcommand-associated-with-oninteractioncreate)
    - [How do I make the slash option at user type return the author id if there's no one selected?](#how-do-i-make-the-slash-option-at-user-type-return-the-author-id-if-theres-no-one-selected)
    - [Can I have two slash commands under the same name in global (across all guilds) and private (limited to one guild)?](#can-i-have-two-slash-commands-under-the-same-name-in-global-across-all-guilds-and-private-limited-to-one-guild)
    - [What if I wanted to create a slash command under the same name?](#what-if-i-wanted-to-create-a-slash-command-under-the-same-name)
    - [How to create a slash command without using any command to execute createApplicationCommand function?](#how-to-create-a-slash-command-without-using-any-command-to-execute-createapplicationcommand-function)
---

# Introduction
This guide is dedicated to my take on slash command's tutorials. It aims to be simplified and mention the common mistakes when setting up slash commands. It is recommended that you read the entire guide otherwise you may end up making mistakes inevitably.

# What are slash commands
Slash commands are supposedly "new generation" of bots by Discord's vision. The idea is that all bots do rely on one prefix that is `/` and so people do not have to guess prefixes of any bot they encounter whether it would be in a server or a random bot they have just added it to an server they're in. Slash commands has been around since April 2021 and has since been enforced into verified bots due to message content intent updates by DIscord!

# Notes
* This guide requires you to have put `onInteractionCreate` onto your events code otherwise the example code for replying to the slash command will not work AT ALL
* You can create up to 100 slash commands both in global (across all guilds) and private (limited to one guild)
* The function `$createApplicationCommand` must be only executed for once, otherwise, you'll update the application command.
* Highly recommend reading the usage from docs to get an idea
* The command code examples here are for command handler setups, so please do not put them directly into your `index.js` or whatever your main file is. You can modify the commands to match with the index.js ones

# Creating the slash command
Slash commands can be created using `$createApplicationCommand`, it is a function that creates an slash command based on what you like such as options, name, description, etc.

It is not a way to create a code to respond to a slash and SHOULD NOT be put under a aoi.js interaction command of a non existing slash command for example. Similar to running any regular functions, `$createApplicationCommand` can be run on anything but I recommend using eval command or at least a prefix command with it.

Here, we can have a usage example:
```js
$createApplicationCommand[global;name;description;true;true;slash]
```

The type `global` is the global (across all guilds) slash command, if you want to create a private (limited to one guild) slash command for one server then replace the word `global` with the server id manually or you can use `$guildID` to get the id automatically. Be aware that `$guildID` does not mean global (across all guilds) commands so therefore, you're creating a private (limited to one guild) slash command for a server.

Let's have a simple prefix command that executes `$createApplicationCommand`
```js
module.exports = {
  name: "create",
  code: `$createApplicationCommand[global;ping;Test command.;true;true;slash]
  Created the \`ping\` slash command.`
}
```

This will create a global (across all guilds) slash command named `ping` with our description called "Test command.", running it will do nothing as we still need to create a aoi.js interaction command to respond to it! What if we also wanted a example of creating an private (limited to one guild) slash command?

Here's an example of creating a private (limited to one guild) slash command:
```js
module.exports = {
  name: "create",
  code: `$createApplicationCommand[$guildID;ping;Test command.;true;false;slash]
  I have created a private (limited to one guild) slash command called \`ping\` for this one specific server.`
}
```

# Deleting the slash command
To delete a slash command, you can use `$deleteApplicationCommand` function.
```js
$deleteApplicationCommand[visibility;id of the slash command]
```

`visibility` here represents the type of the slash command, if it's global (across all guilds) then you will replace it with `global`, otherwise, you will replace it with the server id the slash command was created in.

It is possible to get the id of the slash command by using `$getApplicationCommandID`!
```js
$getApplicationCommandID[slash command name;visibility]
```

Specify the type of the slash command and put it in the second parameter of `$deleteApplicationCommand` thus our final code is done! Here's a example.
```js
$deleteApplicationCommand[global;$getApplicationCommandID[ping;global]]
```

Lastly, if it didn't error the first time but second time it did, then it means that you have successfully deleted the slash command. Restart your Discord if it still appears for you in this case.

# Responding to the commands
We may use `$interactionReply` to respond to the slash command with the same name we used from `$createApplicationCommand` which is `ping` as it's the slash command name we have chose!

Let's create an aoi.js interaction command for slash:
```js
module.exports = {
  name: "ping",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[Hi.]
  `
}
```
Restart your commands using `$updateCommands` and the slash command will now respond with `Hi.`!

# Creating options
`$createApplicationCommand` function has one extra parameter dedicated to options, it is usually a JSON format that goes like this:
```js
$createApplicationCommand[global;exampleslash;Simple example slash command.;true;true;slash;[{
    "name": "exampleoption",
    "description": "example slash command option",
    "required": true,
    "type": 3
}]]
```
We will then use `$slashOption` to get the data inputted through the option from Discord. In this example, if our option starts with `exampleoption` then we will use the same name below on `$slashOption` thus resulting in `$slashOption[exampleoption]`.
```js
module.exports = {
  name: "exampleslash",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[Hello! Your option input is $slashOption[exampleoption]]
  `
}
```

Optionally, we can also create two options by separating each JSON format with a comma
```js
$createApplicationCommand[global;exampleslash;Simple example slash command.;true;true;slash;[{
    "name": "exampleoption1",
    "description": "example slash command option",
    "required": true,
    "type": 3
},{
    "name": "exampleoption2",
    "description": "example slash command option2",
    "required": true,
    "type": 3
}]]
```

`"type":` is the type of the slash option, we're using number `3` which is text type, more information on each option type can be seen [here](https://aoi.js.org/guides/application/commands/#application-command-option-type).

Be aware that you can create up to 25 slash options, so make sure to avoid limits! Getting the data from both of the options should be easy as using multiple of `$slashOption` as well:
```js
module.exports = {
  name: "exampleslash",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[Hello! 
  Your option1 input is $slashOption[exampleoption1]
  Your option2 input is $slashOption[exampleoption2]
  ]
  `
}
```

# Optional options
## Note
When creating multiple options for each slash command, the very first option must be required otherwise it will error out.

You can also make slash command options not required, this can be done by setting `"required":` option to use `false`
```js
$createApplicationCommand[global;exampleslash;Simple example slash command.;true;true;slash;[{
    "name": "exampleoption",
    "description": "example slash command option",
    "required": false,
    "type": 3
}]]
```

When there's no input or if the option hasn't being touched yet, `$slashOption` will return nothing as expected!

# DM Support

### Note
This feature is only available for global (across all guilds) slash commands under the `global` type from createApplicationCommand. You may need to set the parameter `allowDm` to `false` in case of creating a private (limited to one guild) slash command for an server (though, it won't do anything if it was set to `true`).

### Configuring DM Support
Since aoi.js 6.7.0, it is possible to choose whether or not a `global` slash command will appear in the bot's DM itself. This can be done by setting `allowDm` to either `true` or `false` depending on your needs.
```js
$createApplicationCommand[global;name;description;true;allowDm (true/false);slash]
```
Setting the parameter to `true` will allow your bot's users to run your bot's slash commands in it's DMs, this can be useful for some bots otherwise, it might not be the best idea when it comes to economy bots that has robbing features.

You can disable DM Support for a slash command by setting the said parameter to `false`.
```js
$createApplicationCommand[global;name;description;true;false;slash]
```
That's how you configure DM support for a specific global slash command!


That's it for basic level of slash commands understanding! There's more to the slash commands feature and if you would like to know on any other guides about slash commands then please, let me know through the comments here!

# Frequently asked questions

### I have created a slash command but Discord does not show it for me
Discord often has cache problems so it may not display the newly created slash command as a result. Restarting your Discord should fix the problem.

If it still persists then be sure to double check that your slash command is not private (limited to one guild) or at least have executed `$createApplicationCommand` function!

### Is `$createApplicationCommand` associated with `onInteractionCreate`?
No, `$createApplicationCommand` is not part of any event as it can be ran on anything (much like what I said in the very beginning of this post).

However, because slash commands are interactions, any slash commands created from the function are part of `onInteractionCreate`!

### How do I make the slash option at user type return the author id if there's no one selected?
Make sure that your slash option is not required:
```js
$createApplicationCommand[global;exampleslash;Simple example slash command.;true;false;slash;[{
    "name": "exampleoption",
    "description": "example slash command option",
    "required": false,
    "type": 6
}]]
```

Using `$replaceText` and `$checkCondition`, you can replace the empty input from `$slashOption` with `$authorID` and so the end result is this code:
```js
$replaceText[$replaceText[$checkCondition[$slashOption[exampleoption]==];true;$authorID];false;$slashOption[exampleoption]]
```
This code does so that if the option is empty then it replaces it with `$authorID`! You do not have to put the entire code around the entire command so you can use `$let` with `$get` to return the code quickly!
```js
// Return the code
$get[option]

// Store the code
$let[option;$replaceText[$replaceText[$checkCondition[$slashOption[exampleoption]==];true;$authorID];false;$slashOption[exampleoption]]]
```

This is how the final result should look like
```js
module.exports = {
  name: "exampleslash",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[The selected user is $get[option]]

  $let[option;$replaceText[$replaceText[$checkCondition[$slashOption[exampleoption]==];true;$authorID];false;$slashOption[exampleoption]]]
  `
}
```
### Can I have two slash commands under the same name in global (across all guilds) and private (limited to one guild)?
It is possible to create two slash commands under the same name in global (across all guilds) and private (limited to one guild) as Discord allows this by default. Note that you should refrain from accidentally modifying the current one if each one of them has different code than the other one!

### What if I wanted to create a slash command under the same name?
Attempting to create a slash command under the same name with it's current visibility will overwrite the current one! For example if you have used the function to create the same global slash command but with options then it will overwrite the current one to include the options as well!

Consider this as a way to edit your slash commands created (even tho $modifyApplicationCommand does exist)!

### How to create a slash command without using any command to execute createApplicationCommand function?
This seems common for aoi.js verified bot's owners where they're unable to straight use prefix. As of now, there's no way around this except for using a ready event. Ready event is a way to execute things when bot starts. This way is NOT RECOMMENDED AT ALL and can result in spamming if you forget to remove the event that has the function itself to create a slash command.

In case you accept the risk, you can make a ready event like this
```js
module.exports = {
  name: "Create slash",
  type: "ready",
  channel: "",
  code: `$createApplicationCommand[global;ping;Test command.;true;true;slash]
  $log[the slash command ping has been created successfully!]
  `
}
```
Be sure to remove the command after that.