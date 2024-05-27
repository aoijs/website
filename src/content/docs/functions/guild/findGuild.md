---
title: $findGuild
description: $findGuild will attempt to find a guild which is matching with the given query.
id: findGuild
---

`$findGuild` will attempt to find a guild which is matching with the given query.

## Usage

```aoi
$findGuild[guildResolver]
```

## Parameters

| Field         | Type                                                                                              | Description                            | Required |
| ------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------- | :------: |
| guildResolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Query which is used to find the guild. |   true   |

## Example(s)

This will search for a guild:

```javascript
client.command({
    name: "findGuild",
    code: `
  $findGuild[any-server-name]
  `
});
```
