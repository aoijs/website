---
title: $categoryChannels
description: $categoryChannels will return all channels of a given category.
id: categoryChannels
---

`$categoryChannels` will return all channels of a given category.

## Usage

```aoi
$categoryChannels[categoryID;option?;sep?]
```

## Parameters

| Field      | Type                                                                                              | Description                                                                                                                                   | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| categoryID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the category.                                                                                                                       |   true   |
| option?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The option the bot will return the channels in. <br /> 1. **names** - returns channel names (default) <br /> 2. **ids** - returns channel IDs |  false   |
| sep?       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The separator to separate the returned channels.                                                                                              |  false   |

## Example(s)

This will return all channels of the category of the channel where you execute the command in:

```javascript
client.command({
    name: "categoryChannels",
    code: `
  $categoryChannels[$channelCategoryID;names;, ]
  `
});
```
