---
title: $isWidgetEnabled
description: $isWidgetEnabled will return either true or false depending on if the widget of the guild is enabled.
id: isWidgetEnabled
---

`$isWidgetEnabled` will return either true or false depending on if the widget of the guild is enabled.

## Usage

```aoi
$isWidgetEnabled[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return true or false depending on if the widget is enabled in the current guild:

```javascript
client.command({
    name: "isWidgetEnabled",
    code: `
  $isWidgetEnabled[$guildID]
  `
});
```
