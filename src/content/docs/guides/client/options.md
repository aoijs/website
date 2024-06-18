---
title: Client Options
description: This page is covering all aoi.js client options and what they do.
type: guide
author: "Fafa"
author_url: "https://raw.githubusercontent.com/aoijs/website/main/src/images/contributors/fafa.png"
id: options
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/7.png
---

:::tip[Optional Options]

Options who have a leading question mark (?) are optional and **not required**, however if you want to use them, make sure to remove it!

```php
string: ""
array: ["element", "element"]
boolean: true/false
number: 1
```

:::

---

## Client Options

```js
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: string,
    prefix: string,
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onJoin", "onLeave"],
    disableFunctions?: ["$function", "$function"],
    mobilePlatform?: boolean,
    respondToBots?: boolean,
    guildOnly?: boolean,
    cache?: {
        users: number,
        messages: number,
    },
    disableAoiDB?: boolean,
    database?: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        tables: ["main"],
        path: "./database/",
        securityKey: string,
    }, // Example refers to @aoijs/aoi.db, other databases are not included in this Example.
    suppressAllErrors?: boolean,
    errorMessage?: string,
    aoiAutoUpdate?: boolean,
    aoiWarning?: boolean,
    aoiLogs?: boolean,
    respondOnEdit?: {
        commands: boolean,
        time: number,
        nonPrefixed?: boolean,
    },
});
```

---

| OPTION              |      INPUT      | EXPLANATION                                                                                  |
| ------------------- | :-------------: | -------------------------------------------------------------------------------------------- |
| `token`             |     string      | Your Discord Bot Token                                                                       |
| `prefix`            | string \| array | Your Discord Bot Prefix                                                                      |
| `intents`           |      array      | Required Intents                                                                             |
| `events`            |      array      | Required Events                                                                              |
| `disableFunctions`  |      array      | aoi.js functions you want to make unusable                                                   |
| `mobilePlatform`    |     boolean     | Display your Discord Bot Status as "mobile"                                                  |
| `respondToBots`     |     boolean     | Either give your bot the ability to respond to bots or remove it.                            |
| `guildOnly`         |     boolean     | Either give your bot the ability to respond in Direct Message or remove it.                  |
| `cache`             |     string      | Client Cache Options.                                                                        |
| `disableAoiDB`      |     boolean     | Disables the use of aoi.db within your bot, to add custom databases and such.                |
| `database`          |     string      | Client Database Options. (aoi.db)                                                            |
| `suppressAllErrors` |     boolean     | Suppress all occurring errors.                                                               |
| `errorMessage`      |     string      | Send a given error message when `suppressAllErrors` executes, supports parser and functions. |
| `aoiAutoUpdate`     |     boolean     | Automatically update aoi.js if a update is available.                                        |
| `aoiWarning`        |     boolean     | Disable aoiWarning logs which are sent to your console.                                      |
| `aoiLogs`           |     boolean     | Disable aoiLogs which are sent to your console.                                              |
| `respondOnEdit`     |     string      | Give your bot the ability to respond to edited messages and execute the given commands.      |
