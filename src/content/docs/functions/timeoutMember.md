---
title: $timeoutMember
description: $timeoutMember will timeout a given member using Discord's Timeout feature.
id: timeoutMember
---

`$timeoutMember` will timeout a given member using Discord's Timeout feature.

## Usage

```aoi
$timeoutMember[guildID;memberID;timer;timeoutEndsAt?;reason?]
```

## Parameters

| Field          | Type                                                                                                                                                                                                 | Description                                                                      | Required |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | :------: |
| guildID        | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | The guild ID of where the member is located in.                                  |   true   |
| memberID       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | The ID of the user that will be timeouted.                                       |   true   |
| timer          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The duration of the timeout.                                                     |   true   |
| timeoutEndsAt? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                  | Returns time when timeout ends. <br /> 1. **true** <br /> 2. **false** (default) |  false   |
| reason?        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The reason that will be displayed in the guild's audit logs.                     |  false   |

## Example(s)

This will timeout a given member for five minutes:

```javascript
client.command({
    name: "timeoutMember",
    code: `
   $timeoutMember[$guildID;userID;5m;false]`
});
```
