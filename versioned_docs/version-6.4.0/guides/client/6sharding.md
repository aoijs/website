---
title: Client Sharding
description: This Guide will be covering how to integrate Sharding for your Discord Bot.
id: sharding
---

### Table of Contents

- [Introduction](#introduction)
  - [What is Sharding](#what-is-sharding)
  - [Using Sharding](#using-sharding)
- [Usage](#usage)
  - [File Parameters](#file-parameters)
  - [sharderOptions](#sharderoptions)
  - [spawnOptions](#spawnoptions)
- [Example](#example)

---

## Introduction

### What is Sharding

As a bot developer, you may have experienced some limitations when scaling up your Discord bot to serve a large number of users. Discord imposes a maximum limit of 2500 guilds per bot, and if your bot exceeds this number, Discord enforces a sharding strategy to split portions of your bot into separate processes.

Sharding is an effective way to distribute your bot's workload across multiple servers, which can greatly enhance the bot's performance and reduce the strain on any single server. Once you've reached the 2500-guild limit, Discord requires that you shard your bot in a way that allocates no more than 2500 guilds per shard.

To make the sharding process easier for bot developers, aoi.js provides built-in support for sharding. Developers can split their bot's workload into smaller, more manageable parts, each of which runs in its own separate process. The recommended number of guilds per shard is around 1000, but this can vary depending on your bot's functionality and complexity.

One advantage of sharding is that it allows you to split your bot's workload across multiple servers, which can reduce the processing load on any one server and make your bot more responsive. Additionally, sharding can be useful in scenarios where you need to run multiple instances of your bot for different users or groups of users.

In some cases, you may want some or all of your shards to be in the same process, allowing for a shared state. This is possible with aoi.js, which provides a flexible and powerful built-in handler for managing the sharding process. With the ability to split your bot's workload across multiple processes, you can ensure that your bot runs smoothly, even as its user base grows over time.

### Using Sharding

aoi.js has `ClientShard` class to handle `Sharding` for your Discord Bot.

## Usage

```ts
const sharder: ClientShard = new ClientShard(
    file
:
string,
    sharderOptions ? : ShardOption,
    spawnOptions ? : SpawnOption
)
```

### File Parameters

<table>
  <tr>
    <th>Type</th>
    <td>string</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>Path to bot file</td>
  </tr>
    <tr>
    <th>Required</th>
    <td>true</td>
  </tr>
  <tr>
    <th>Default</th>
    <td>N/A</td>
  </tr>
</table>

### sharderOptions

| Property         | Type      | Description                          | Required                               | Default          |
| ---------------- | --------- | ------------------------------------ | -------------------------------------- | ---------------- |
| **_totalShard_** | string \  | number                               | number of total Shards                 | false            | auto  |
| **_shardList_**  | string \  | number[]                             | List of Shards to spawn                | false            | auto  |
| **_mode_**       | process \ | worker                               | type of Sharding Mode (child_process \ | worker_threads ) | false | process |
| **_respawn_**    | boolean   | whether to respawn shards on exiting | false                                  | true             |
| token            | string    | token to use for shard count         | false                                  | none             |

### spawnOptions

| Property      | Type     | Description                                                                     | Required                  | Default |
| ------------- | -------- | ------------------------------------------------------------------------------- | ------------------------- | ------- |
| **_amount_**  | string \ | number                                                                          | number of shards to spawn | false   | `ClientShard#totalShards` |
| **_delay_**   | number   | delay for spawning each shard ( `in ms` )                                       | false                     | 5500    |
| **_timeout_** | number   | The amount in milliseconds to wait until the `Bot` has become ready ( `in ms` ) | false                     | 30000   |

## Example

This should be a new file, for example `shard.js`:

```js title="shard.js"
const { ClientShard } = require("aoi.js");

const sharder = new ClientShard("./index.js", {
    token: "DISCORD BOT TOKEN"
});

sharder.startProcess();
```

This is is your main file which is the source running your Discord Bot, it's typically your `index.js`:

```js title="index.js"
const { AoiClient } = require("aoi.js");
const bot = new AoiClient({
    token: "DISCORD BOT TOKEN",
    prefix: "DISCORD BOT PREFIX",
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"]
});

bot.command({
    name: "ping",
    code: `
        Pong!
        WS -> $ping ms
        ShardId -> $shardId
        ShardPing -> $shardPing[$shardId]
    `,
});
```
