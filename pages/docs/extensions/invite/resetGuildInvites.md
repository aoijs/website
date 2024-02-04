---
title: $resetGuildInvites
description: $resetGuildInvites will reset the invites of a guild.
id: resetGuildInvites
sidebar: 
  badge:
    text: New
    variant: tip
extension: true
---
`$resetGuildInvites` will reset the invites of a guild.

## Usage

```php
$resetGuildInvites[field[guildId]]
```

## Parameters

| Parameter | Description    | Type   | Required |
| --------- | -------------- | ------ | -------- |
| guildId   | The guild's id | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |

## Example(s)

Resets the invites of a guild

```javascript
$resetGuildInvites
//or

$resetGuildInvites[$guildID]
```
