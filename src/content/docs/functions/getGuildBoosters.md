---
title: $getGuildBoosters
description: $getGuildBoosters will fetch and return the automod rules of the specified guild
id: getGuildBoosters
---

`$getGuildBoosters` will fetch and return all the boosters of the specified guild.

## Usage

```aoi
$getGuildBoosters[guildID;option?;sep?]
```

## Parameters

| Field   | Type                                                                                                                                                                                                 | Description                                            | Required |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | :------: |
| guildID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | The ID of the guild.                                   |   true   |
| option? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The type of the function response.                     |  false   |
| option? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The separator between each booster.                    |  false   |

## Example(s)

```javascript
client.command({
    name: "getGuildBoosters",
    code: `
    $getGuildBoosters[$guildId;{username} - {id};,]
  `
});
```
