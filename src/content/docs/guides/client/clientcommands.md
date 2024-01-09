---
title: Client Commands
description: This guide will be covering how to start creating commands, how to use command handlers, how to creat multiple commands in one file and how to update commands without restarting your Discord Bot.
id: commands
og_image: /src/images/og/4.png
---

To get started, we should explain commands first.

Commands are a way to make your bot execute specific code just by sending a message in your Discord channel.

In order to make those commands execute though, we need to create them first. There are two ways, adding the commands directly to the client or creating a command handler.

### Adding Commands to your Bot

In this step we'll take a look at how to add commands to your bot directly from your main file, commonly known as `index.js`.

```diff lang="js" title="index.js"
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  // our configuration
});

+ client.command({
+   name: "Your command name", // This will define the name of your command, which will later get executeable.
+   code: `Your code here` // This will define the code that will be executed when the command gets executed.
+ });
```

Let's create a simple `ping` command which shows the bot's current ping.

Firstly we name our command.

```js {2} title="index.js"
client.command({
  name: "ping",
})
```

After this is done, we can add code, which shows the current ping.

```js {3} title="index.js"
client.command({
  name: "ping",
  code: `My ping is $ping MS!` // The ping function returns the current ping.
})
```

This is the easy way, but it can get cluttered fast if you add a lot of commands. If that's the case, consider using command handlers instead.

---

## Command Handlers

In this, we'll take a look at command handlers and on how to use them. There are multiple ways, but let's start with one.

```diff lang="js" title="index.js"
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  // our configuration
});

+ client.loadCommands("./commands/", true); // This will be your commands folder, you can give it any name you want. The true enables the logging, you can disable it by replacing true with false.
```

Make sure to create a commands folder in the root directory, meaning where your index.js file is located.

Once that is done, we start creating files inside of that folder.

These files can be named what you want, however you need to add the `.js` syntax after the name, to turn it into a Javascript file.

Let's, once again, create a ping command. It's basically the same, just one line changes.

```diff lang="js" title="commands/index.js"
- client.command({
+ module.exports = ({
    name: "ping",
    code: `My ping is $ping MS!` // The ping function returns the current ping.
});
```

Everything besides the first line stays the same, easy right?

Your command should look like this in the end:

```js title="commands/ping.js"
module.exports = ({
    name: "ping",
    code: `My ping is $ping MS!` // The ping function returns the current ping.
});
```

---

So let's look at adding **multiple** commands to the same file, yes, multiple!

Yet again, we pretty much only change the first and last line.

```diff lang="js" title="commands/ping.js"
- module.exports = ({
+ module.exports = [{
    name: "ping",
    code: `My ping is $ping MS!` // The ping function returns the current ping.
- });
+ }, {
+   name: "uptime",
+   code: `I'm online for $uptime!` // The uptime function returns the current uptime in hours, minutes and seconds.
+ }];
```

This is basically an array just with a little extra spice.

Your command should look like this in the end:

```js title="commands/ping.js"
module.exports = [{
  name: "ping",
  code: `My ping is $ping MS!` // The ping function returns the current ping.
}, {
  name: "uptime",
  code: `I'm online for $uptime!` // The uptime function returns the current uptime in hours, minutes and seconds.
}];
```

And there you go, you successfully created two commands in the same file!

---

## Updating Commands

When using the command handler, you are able to refresh all your commands within the command directory with a single function, called `$updateCommands`! This function will refresh all commands, which are in the directory.