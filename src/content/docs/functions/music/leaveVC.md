---
title: $leaveVC
description: $leaveVC will make your bot leave the current Voice Channel.
id: leaveVC
sidebar: 
  badge:
    text: New
    variant: tip
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$leaveVC` will make your bot leave the current Voice Channel.

## Usage

```php
$leaveVC[guildID?]
```

## Parameters

| Field    | Type                                                                                                | Description | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ----------- | :------: |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | guild ID    |  false   |

## Example(s)

This will make your bot leave the current voice channel in the current guild (if any):

```javascript
client.command({
  name: "leaveVC",
  code: `
    $leaveVC[$guildID]
  `,
});
```
