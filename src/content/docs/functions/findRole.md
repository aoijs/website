---
title: $findRole
description: $findRole will search and return a given role of a certain guild.
id: findRole
---

`$findRole` will search and return a given role of a certain guild.

## Usage

```aoi
$findRole[roleResolver;guildID?]
```

## Parameters

| Field        | Type                                                                                              | Description                            | Required |
| ------------ | ------------------------------------------------------------------------------------------------- | -------------------------------------- | :------: |
| roleResolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Name of the role you want to find.     |   true   |
| guildID?     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Guild ID where the role is present in. |  false   |

## Example(s)

This will return the role ID of the role `Owner` if it exists:

```javascript
client.command({
    name: "findRole",
    code: `
  $findRole[Owner;$guildID]
  `
});
```
