---
title: $leaveVC
description: $leaveVC will make your bot leave the current Voice Channel.
id: leaveVC
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$leaveVC` will make your bot leave the current Voice Channel.

## Usage

```aoi
$leaveVC[guildID?]
```

## Parameters

| Field    | Type                                                                                             | Description | Required |
| -------- | ------------------------------------------------------------------------------------------------ | ----------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Numer) | guild ID    |  false   |

## Example(s)

This will make your bot leave the current voice channel in the current guild (if any):

```javascript
client.command({
    name: "leaveVC",
    code: `
    $leaveVC[$guildID]
  `
});
```
