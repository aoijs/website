---
title: $inviteeInfo
description: $inviteeInfo returns the invitee's information.
id: inviteeInfo
sidebar: 
  badge:
    text: New
    variant: tip
extension: true
---

`$inviteeInfo` will return the invitee's information.

## Usage

```php
$inviteeInfo[field[userId];field[guildId];field[options]]
```

## Parameters

| Parameter | Description    | Type   | Required |
| --------- | -------------- | ------ | -------- |
| userId    | The user's id  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |
| guildId   | The guild's id | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |
| options   | The options    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |

## Example(s)

Returns the invitee's information

```javascript
$inviteeInfo
//or
$inviteeInfo[$authorID;$guildId;inviter]
//or
$getObjectProperty[name;inviter]
$createObject[name;$inviteeInfo[$authorID;$guildID;all]]
```
