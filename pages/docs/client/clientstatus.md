---
title: Client Status Guide
description: Learn how to customize and manage client statuses and presences in your Discord bot.
id: status
og_image: https://raw.githubusercontent.com/aoijs/website/main/images/og/10.png
---

<!-- omit from toc -->
## Table of Contents

- [Bot Status](#bot-status)
  - [Customizing Bot Status](#customizing-bot-status)
  - [Status Types](#status-types)
- [Client Presence](#client-presence)
  - [Presence Types](#presence-types)

---

### Bot Status

#### Customizing Bot Status

To customize your bot's status, add the following code to your main file:

```javascript
client.status({
    name: string,
    type: string,
    time: number,
    url?: string,
    afk?: boolean,
});
```

When using sharding, you can individually change the status of each shard:

```javascript
client.status({
  name: string,
  type: string,
  time: number,
  shard: number,
});
```

Replace `string`, `number`, and `boolean` with appropriate values. Here's an example:

```javascript
client.status({
  name: "Example Text!",
  type: "PLAYING",
  time: 12,
});
```

You can have multiple statuses by adding multiple `client.status({...})` calls:

```javascript
client.status({
  name: "Example Text one!",
  type: "PLAYING",
  time: 12,
});

client.status({
  name: "Example Text two!",
  type: "STREAMING",
  time: 25,
  url: "some URL",
});

client.status({
  name: "Doing nothing..", // Normal status like any other Discord user without any state.
  time: 50,
  type: "CUSTOM",
});
```

#### Status Types

There are various types of statuses (not case-sensitive):

- **PLAYING**
- **WATCHING**
- **STREAMING**
- **LISTENING**
- **COMPETING**
- **CUSTOM**

### Client Presence

You can also set the bot's presence by adding the `status` property, for example:

```javascript
client.status({
  name: "Example Text!",
  type: "PLAYING",
  status: "dnd",
  time: 12,
});
```

#### Presence Types

Available presence statuses:

- **online**
- **idle**
- **dnd**
- **invisible**