---
title: $oldState
description: $oldState holds data for the user voice state before it was updated (voiceStateUpdate event).
id: oldState
---

`$oldState` holds data for the user voice state before it was updated (voiceStateUpdate event).

## Usage

```aoi
$oldState[option]
```

## Parameters

| Field  | Type                                                                                              | Description         | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| option | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Option to retrieve. |   true   |

## Options

| Options | Type                                                                                                | Description                                                            |
| ------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| deaf    | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Returns whether this member is either self-deafened or server-deafened |
| mute    | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Returns whether this member is either self-muted or server-muted       |
| guildId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | Returns guild ID                                                       |
