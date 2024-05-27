---
title: $usersInChannel
description: $usersInChannel will return all users who are connected to the specified voice channel.
id: usersInChannel
---

`$usersInChannel` will return all users who are connected to the specified voice channel.

## Usage

```aoi
$usersInChannel[channelID;option?;sep?]
```

## Parameters

| Field     | Type                                                                                              | Description                                                                                | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Voice Channel ID.                                                                          |   true   |
| option?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | How to return the users <br /> 1. **id** (default) <br /> 2. **user** - mentions the users |  false   |
| sep?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator to separate multiple returned values.                                            |  false   |

## Example(s)

This will return the users connected to a voice channel:

```javascript
client.command({
    name: "usersInChannel",
    code: `
  $usersInChannel[$voiceID;user;, ]
  `
});
```
