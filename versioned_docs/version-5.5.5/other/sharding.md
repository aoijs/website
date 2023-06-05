---
title: Sharding
---

> Sharding is only necessary for bots in 2,000+ Guilds

#### How to shard

```javascript
const bot = new Aoijs.bot({
    sharding: true,
    shardAmount: 2,
    oken: "DISCORD BOT TOKEN",
    prefix: "DISCORD BOT PREFIX",
    intents: ["GUILDS", "GUILD_MESSAGES"]
})
```

#### Finding current guild's shard ID

```javascript
bot.command({
    name: "shardID",
    code: `Guilds Shard: $shardID`
})
```

> Sharding can lead to high ping/response time and depending your host, can use a lot of memory and disk space




