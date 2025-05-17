---
title: $allApplicationCommands
description: $allApplicationCommands will return all slash command names registered in the bot's application.
id: allApplicationCommands
---

`$allApplicationCommands` will return all slash command names registered in the bot's application.

## Usage

```aoi  
$allApplicationCommands[sep?]
```

## Parameters

| Field     | Type                                                                                                | Description                                           | Required |
| --------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | :------: |
| sep?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Separator used between command names. Default is `,`. |  false   |

## Example(s)

This will return all slash commands separated by a comma and a space:

```javascript
client.command({
  name: "allApplicationCommands",
  code: `
  $allApplicationCommands[, ]
  `
});
```
