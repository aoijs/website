---
title: Command Handler
description: This guide will be covering how to start using command handlers, creating multiple commands in one file and updating commands without restarting your Discord Bot.
id: handler
---

## Why should you use Command Handler?

Storing your commands in your main file may seem fine, but after a certain amount of commands it can get hard to find and update commands. Therefore you should use the Command Handler to keep your main file neat and save yourself from the clutter.

### Table of Contents

- [Why should you use Command Handler?](#why-should-you-use-command-handler)
  - [Starting off with modifying your main file](#starting-off-with-modifying-your-main-file)
  - [Setting everything up with folders and files](#setting-everything-up-with-folders-and-files)
    - [Creating sub directories](#creating-sub-directories)
    - [Creating files inside of the directory](#creating-files-inside-of-the-directory)
- [Final Steps](#final-steps)
  - [Change of creating commands](#change-of-creating-commands)
  - [Multiple commands in one file](#multiple-commands-in-one-file)
  - [Updating your commands without restart!](#updating-your-commands-without-restart)

---

### Starting off with modifying your main file

In this step we'll take a look at your main file also known as `index.js`. We add `LoadCommands` in order for
the bot to understand where our files are.

:::warning
Ensure you edited the first line of code when you start using the LoadCommands class.

\- `const { AoiClient } = require("aoi.js");`  
\+ `const { AoiClient, LoadCommands } = require("aoi.js");`  
:::

```javascript title="index.js"
const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
    token: "Discord Bot Token",
    prefix: "Discord Bot Prefix",
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/") //you can change this to any directory you want
```

### Setting everything up with folders and files

Once you're done with your main file, we'll move on onto files, in order for this to work we need to do two things.

1. Create directories and sub-directories where your commands go.

![p2](https://cdn.discordapp.com/attachments/1082168708866244648/1083390579402088458/HwYiJqoeF9SAAAAAElFTkSuQmCC.png)

2. And create a file to test out if everything worked well.

![p2](https://cdn.discordapp.com/attachments/1082168708866244648/1083390890405543976/Awoopj94LkCqAAAAAElFTkSuQmCC.png)

#### Creating sub directories

If you want to have your commands and files more organised then use sub directories, simply click on the **commands**
directory you created earlier and create as many sub directories as you want inside of it, for example, music commands.

![p3](https://cdn.discordapp.com/attachments/1082168708866244648/1083391154227261540/e0P4fAZqcEmh2npQAAAAASUVORK5CYII.png)

#### Creating files inside of the directory

You can create as many files as you want in your directories as long as they have `.js` file extension at the end of their file name
it'll work without issues. For now, create a file called `help.js`.

## Final Steps

### Change of creating commands

From now on you have to use:

```javascript
module.exports = [{...}]
module.exports = ({...})
```

Open your `help.js` and copy & paste the following code snippet:

```javascript title="commands/help.js"
module.exports = [{
    name: "help",
    aliases: ["helpcmd", "helpme"],
    code: `
$title[Help Command!]
$thumbnail[$userAvatar[$authorID]] 
$description[Any text you like can go here!]
$footer[Even footers!]`
}];
```

Now restart your bot, and let the magic happen! Simply use `[prefix]help` or any of the aliases to make the message
appear.

### Multiple commands in one file

From now on, you can have multiple commands in one file, this is useful for `awaited` commands or any similar. Let's
create a little nice welcome command and combine the command from above with it!

```javascript title="commands/help.js"
module.exports = [{
    name: "help",
    aliases: ["helpcmd", "helpme"],
    code: `
$title[Help Command!]
$thumbnail[$userAvatar[$authorID]] 
$description[Any text you like can go here!]
$footer[Even footers!]`
}, {
    type: "join",
    channel: "$channelID",
    code: `
$log[Someone joined a server!]`
}]
```

:::info  
All Command Types can be found [here](./1events.md)!  
:::

Make sure you have the required intents and `onJoin` in the `events` property in your `index.js` or else this won't
work!
> **Required intents: `GuildMembers`**

### Updating your commands without restart!

You are able to use `$updateCommands` when updating commands in your directory. Please note that this does **not** apply
to any files outside of the directory.