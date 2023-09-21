---
title: $broadcastEval
description: $broadcastEval will execute a code in all guilds of all shards.
id: broadcastEval
---

`$broadcastEval` will execute a code in all guilds of all shards. (requires sharding)

## Usage

```php
$broadcastEval[function]
```

## Parameters

| Field    | Type   | Description                             | Required |
| -------- | ------ | --------------------------------------- | :------: |
| function | string | Function or code that will be executed. |   true   |

## Example(s)

**Requires Sharding - Review the Sharding Guide if you need explanation**

This will return the amount of servers your bot is in:

```javascript
client.command({
  name: "broadcastEval",
  code: `
  $broadcastEval[$guildCount]
  `,
});
```
