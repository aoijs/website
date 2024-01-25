---
title: $inviterInfo
description: $inviterInfo will return the inviter's information
id: inviterInfo
sidebar: 
  badge:
    text: New
    variant: tip
---

:::tip[Extension]

This requires aoi.invite installed.

:::

`$inviterInfo` will return the inviter's information

## Usage

```php
$inviterInfo[field[userId];field[guildId];field[options]]
```

## Parameters

| Parameter | Description    | Type   | Required |
| --------- | -------------- | ------ | -------- |
| userId    | The user's id  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |
| guildId   | The guild's id | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |
| options   | The options    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |

## Example(s)

Returns the inviter's information

```javascript
$inviterInfo
//or
$inviterInfo[$authorID;$guildId;codes]
//or
$getObjectProperty[name;codes]
$createObject[name;$inviterInfo[$authorID;$guildID;all]]
```
