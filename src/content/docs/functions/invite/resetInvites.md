---
title: $resetInvites
description: $resetInvites will reset the invites of a user.
id: resetInvites
---

:::tip[Extension]

This requires aoi.invite installed.

:::

`$resetInvites` will reset the invites of a user.

## Usage

```php
$resetInvites[field[guildId];field[userId]]
```

## Parameters

| Parameter | Description    | Type                                                                                              | Required |
| --------- | -------------- | ------------------------------------------------------------------------------------------------- | -------- |
| guildId   | The guild's id | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |
| userId    | The user's id  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |

## Example(s)

Resets the invites of a user

```javascript
$resetInvites
//or

$resetInvites[$guildID;$authorID]
```
