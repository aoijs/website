---
title: $inviteJoins
description: $inviteJoins returns the member ids who joined with the invite
id: inviteJoins
---

:::tip[Extension]

This requires aoi.invite installed.

:::

`$inviteJoins` will return the member ids who joined with the invite

## Usage

```php
$inviteJoins[field[code];field[guildId];field[separator]]
```

## Parameters

| Parameter | Description                          | Type                                                                                              | Required |
| --------- | ------------------------------------ | ------------------------------------------------------------------------------------------------- | -------- |
| code      | The invite code                      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | true     |
| guildId   | The guild's id                       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |
| separator | The separator between the member ids | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | false    |

## Example(s)

Returns the member ids who joined with the invite

```javascript
$inviteJoins[inviteCode;$guildID]
```
