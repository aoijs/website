---
title: Invite System
description: This page is covering all about the built-in invite system .
id: invite-system
---

**This page is about command options and what they do.**

## Table of Contents

- [Getting Started](#getting-started)
- [Setup](#setup)

---

## Getting Started

The built-in invite system offers the ability to cache and manage your invites of specific servers.

```js
const { AoiClient, LoadCommands, AoiInviteSystem } = require("aoi.js");

const bot = new AoiClient({
    token: process.env.token,
    prefix: "!",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildInvites"],
    events: ["onMessage", "onInviteCreate", "onInviteDelete"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    },
    fetchInvites: {
        cacheInviters: true,
        enabled: true,
    }
});

new AoiInviteSystem(bot, true);
```

## Setup

```js title="Invite Setup"
fetchInvites: {
    cacheInviters : boolean,
    enabled : boolean,
}
```


```js title="AoiInviteSystem Class"
AoiInviteSystem(clientInstance, enableCaching)
```

---

## Invite Events

### InviteCreate

```js title="inviteCreate"
bot.inviteCreateCommand({
    name?: string,
    channel: integer,
    code: string 
})
```

```js title="inviteCreate"
module.exports = ({
    name?: string,
    type: "inviteCreate",
    channel: integer,
    code: string 
})
```

---

### InviteDelete

```js title="inviteDelete"
bot.inviteDeleteCommand({
    name?: string,
    channel: integer,
    code: string 
})
```

```js title="inviteDelete"
module.exports = ({
    name?: string,
    type: "inviteDelete",
    channel: integer,
    code: string 
})
```