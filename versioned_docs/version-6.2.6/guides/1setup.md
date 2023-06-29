---
title: Setup
description: Ready to begin using aoi.js, this is the basic setup you'll need to begin using aoi.js.
id: setup
---

## Installation

<Tabs groupId="pref-install">
  <TabItem value="i-npm" label="npm">

  **node.js 16.9.0 or newer is required.**
  ```bash
  npm install aoi.js
  ```

  </TabItem>
  <TabItem value="i-yarn" label="yarn">

  **node.js 16.9.0 or newer is required.**
  ```bash
  yarn add aoi.js
  ```
  
  </TabItem>
</Tabs>

## Example

```javascript title="index.js"
const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: "Discord Bot Token",
    prefix: "Discord Bot Prefix",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "@akarui/aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

// Ping Command Example
bot.command({
    name: "ping",
    code: `Pong! $pingms`
});

/* Slash Interaction Command Example (ping)
You must execute the function below for the slash command to work:
$createApplicationCommand[$guildID;ping;Pong!;true;slash]
*/

bot.interactionCommand({
    name: "ping",
    prototype: "slash",
    code: `$interactionReply[Pong! $pingms;;;;everyone;false]`
});
```