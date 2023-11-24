---
title: $muteUser
description: $muteUser will mute or unmute a given user in a Voice Channel.
id: muteUser
---

`$muteUser` will mute or unmute a given user in a Voice Channel.

## Usage

```php
$muteUser[guildID;userID;mute?;reason?]
```

## Parameters

| Field   | Type                                                                                                | Description                                                                               | Required |
| ------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | :------: |
| guildID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The guild ID of where the user is located.                                                |   true   |
| userID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The user ID of the user to mute/unmute.                                                   |   true   |
| mute?   | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Mute or unmute the user. <br /> 1. **true** (mute / default) <br /> 2. **false** (unmute) |  false   |
| reason? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Reason that will be displayed in the guild's audit logs.                                  |  false   |

## Example(s)

This will server mute yourself (must be in a voice channel):

```javascript
client.command({
  name: "muteUser",
  code: `
  $muteUser[$guildID;$authorID;true]
  `
});
```
