---
title: $inviteLeaderboard
description: $inviteLeaderboard will return the invite leaderboard.
id: inviteLeaderboard
sidebar: 
  badge:
    text: New
    variant: tip
---

:::tip[Extension]

This requires aoi.invite installed.

:::

`$inviteLeaderboard` will return the invite leaderboard.

## Usage

```php
$inviteLeaderboard[field[guildId];field[page];field[limit];field[format]]
```

## Parameters

| Parameter | Description                   | Type   | Required |
| --------- | ----------------------------- | ------ | -------- |
| guildId   | The guild's id                | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |
| page      | The page number               | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | false    |
| limit     | The limit of the leaderboard  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | false    |
| format    | The format of the leaderboard | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |

## Example(s)

Returns the invite leaderboard

```javascript
$inviteLeaderboard
//or

$inviteLeaderboard[$guildID;1;10;{position}. {invitername} - {total} invites]
```
