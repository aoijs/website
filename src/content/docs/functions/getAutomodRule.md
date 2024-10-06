---
title: $getAutomodRule
description: $getAutomodRule will fetch and return the selected automod rule of the specified guild
id: getAutomodRule
---

`$getAutomodRule` will fetch and return the selected automod rule of the specified guild.

## Usage

```aoi
$getAutomodRule[guildID;name?;option?]
```

## Parameters

| Field   | Type                                                                                                                                                                                                 | Description                                            | Required |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | :------: |
| guildID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | The ID of the guild where the automod rule exists in.  |   true   |
| name?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number) | The name or ID of the automod rule.                    |  false   |
| option? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The type of the function response.                     |  false   |


## Example(s)

```javascript
client.command({
    name: "getAutomodRule",
    code: `
  $getAutomodRule[$guildID;name]
  `
});
```
