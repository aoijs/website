---
title: $filterMembers
description: $filterMembers filters members in a guild and returns them.
id: filterMembers
---

`$filterMembers` filters members in a guild and returns them.

## Usage

```aoi
$filterMembers[guildId;filter;returnAs?;total?;separator?]
```

## Parameters

| Field      | Type                                                                                               | Description                                                                                                                       | Required |
| ---------- | ---------------------------------------------------------------------------------------------------| --------------------------------------------------------------------------------------------------------------------------------- | :------: |
| guildId    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)  | ID of the guild to filter members from.                                                                                           | true     |
| filter     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)  | Space-separated filters: `bots`, `members`, `boosters`, `online`, `offline`, `role:roleId1,roleId2`.                              | true     |
| returnAs?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)  | Format of each member in the output. Supports `{username}`, `{discriminator}`, `{tag}`, `{id}`, `{mention}`. Default: `{mention}` | false    |
| total?     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)  | Maximum number of members to return. Default: 5                                                                                   | false    |
| separator? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)  | Separator between members in the returned string. Default: `,`                                                                    | false    |

## Example(s)

This will return up to 10 online members as mentions, separated by a comma:

```javascript
client.command({
    name: "onlineMembers",
    code: `
  $filterMembers[$guildID;online;{mention};10;,]
  `
});
```
