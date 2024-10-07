---
title: $getAutomodRules
description: $getAutomodRules will fetch and return the automod rules of the specified guild
id: getAutomodRules
---

`$getAutomodRules` will fetch and return the automod rules of the specified guild.

## Usage

```aoi
$getAutomodRules[guildID;option?;sep?]
```

## Parameters

| Field   | Type                                                                                                                                                                                                 | Description                                            | Required |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | :------: |
| guildID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | The ID of the guild where the automod rules exists in. |   true   |
| option? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The type of the function response.                     |  false   |
| sep?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The separator between each automod rule.               |  false   |

## Example(s)

```javascript
client.command({
    name: "getAutomodRules",
    code: `
    $getAutomodRules[$guildID;{name};, ]
  `
});
```
