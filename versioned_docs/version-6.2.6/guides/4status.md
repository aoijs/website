---
title: Client Status
description: This guide will be covering the functionality and usage of client statuses.
id: status
---

#### This guide will be covering statuses and client presences.

### Table of Content

- **[Statuses](#bot-status)**
- **[Client Presence](#client-presence)**

---

### Bot Status

#### This section will cover how to customize your bot's status.

First of all we have to add the following piece of code to our main file:

```javascript
bot.status({
    text: string,
    type: string,
    time: number,
    URL?: string,
    afk?: boolean
});
```

When you use sharding you can individually change the status of each shard:

```javascript
bot.status({
    text: string,
    type: string,
    time: number,
    shard: number
});
```

This will display the text "Example Text!" as bot status, of course you can modify it.

If you want to have multiple statuses just add multiple `bot.status({...})`, simple do the following:

```javascript title="index.js"
bot.status({
    text: "Example Text one!",
    type: "PLAYING",
    time: 12
});

bot.status({
    text: "Example Text three!",
    type: "STEAMING",
    URL: "some URL"
});
```

There are various types of statuses:

* **PLAYING**
* **WATCHING**
* **STREAMING**
* **LISTENING**
* **COMPETING**

### Client Presence

You can also set the bot's presence, by adding the `status` property, for example:

```javascript title="index.js"
bot.status({
    text: "Example Text!",
    type: "PLAYING",
    status: "dnd",
    time: 12
});
```

There are multiple types of presences:

> * **online**
> * **idle**
> * **dnd** 
> * **invisible**