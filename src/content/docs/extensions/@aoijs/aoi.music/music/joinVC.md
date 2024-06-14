---
title: $joinVC
description: $joinVC will make your bot join a specified voice channel.
id: joinVC
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$joinVC` will make your bot join a specified voice channel.

## Usage

```aoi
$joinVC[voiceID?;selfDeaf?;selfMute?;speaker?;audioPlayerType?;debug?]
```

## Parameters

| Field            | Type                                                                                              | Description                                                                            | Required |
| ---------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | :------: |
| voiceID?         | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | voice channel id                                                                       |  false   |
| selfDeaf?        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | deafen when joining Voice Channel <br /> 1. **yes** (default) <br /> 2. **no**         |  false   |
| selfMute?        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | mute when joining Voice Channel <br /> 1. **no** (default) <br /> 2. **yes**           |  false   |
| speaker?         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | become speaker when joining Stage Channel <br /> 1. **yes** (default) <br /> 2. **no** |  false   |
| audioPlayerType? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | audio Player Type <br /> 1. **default** (default)                                      |  false   |
| debug?           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | enable debug (not recommended) <br /> 1. **no** (default) <br /> 2. **yes**            |  false   |

**You require `intents: ["GuildVoiceStates"]` in your main file.**

## Example(s)

This will make your bot join the voice channel you're currently in:

```javascript
client.command({
    name: "joinVC",
    code: `
    $joinVC[$voiceID;yes;no;yes;default;no]
  `
});
```
