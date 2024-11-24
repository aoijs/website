---
title: $newGuild
description: $newGuild holds data for the guild after the update, might be a good idea to check partial option before accessing any property. (guildUpdate event)
id: newGuild
---

`$newGuild` holds data for the guild after the update, might be a good idea to check partial option before accessing any
property. (guildUpdate event)

## Usage

```aoi
$newGuild[option]
```

## Parameters

| Field  | Type                                                                                              | Description         | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to retrieve. |   true   |

## Options

| Option           | Type                                                                                              | Description                                   |
| ---------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| afkChannel | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns AFK Channel Name  |
| bannerURL  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Returns guild banner URL  |
