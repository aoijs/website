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
| sep? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The separator between each booster.                    |  false   |

## Types

| Type     | Description                         |
| -------- | ----------------------------------- |
| {mention} | Mentions users who boosted.   |
| {id}    | Returns the id of users who boosted.                  |
| {nickname}    | Returns the nickname of users who boosted.                 |
| {username}      | Returns the username of users who boosted. |
| {premiumSinceTimestamp}      | Returns the timestamp of boost time. |

## Example(s)

```javascript
client.command({
    name: "getGuildBoosters",
    code: `
    $getGuildBoosters[$guildId;{username} - {id};,]
  `
});
```
