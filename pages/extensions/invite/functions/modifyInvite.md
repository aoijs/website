---
title: $modifyInvite
description: $modifyInvite will modify an invite.
id: modifyInvite
sidebar: 
  badge:
    text: New
    variant: tip
extension: true
---
`$modifyInvite` will modify an invite.

## Usage

```php
$modifyInvite[field[inviter];field[guildId];field[options];field[value]]
```

## Parameters

| Parameter | Description      | Type   | Required |
| --------- | ---------------- | ------ | -------- |
| inviter   | The inviter's id | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | true     |
| guildId   | The guild's id   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | true     |
| options   | The options      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | true     |
| value     | The value        | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | true     |

## Example(s)

Modifies the invite

```javascript
$modifyInvite[$authorID;$guildID;counts.total;10]
```
