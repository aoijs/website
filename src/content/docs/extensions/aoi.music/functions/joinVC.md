---
title: $joinVC
description: $joinVC will make your bot join a specified voice channel.
id: joinVC
---

`$joinVC` will make your bot join a specified voice channel.

## Usage

```php
$joinVC[voiceID?;selfDeaf?;selfMute?;speaker?;audioPlayerType?;debug?]
```

## Parameters

| Field            | Type    | Description                                                                            | Required |
| ---------------- | ------- | -------------------------------------------------------------------------------------- | :------: |
| voiceID?         | integer | voice channel id                                                                       |  false   |
| selfDeaf?        | string  | deafen when joining Voice Channel <br /> 1. **yes** (default) <br /> 2. **no**         |  false   |
| selfMute?        | string  | mute when joining Voice Channel <br /> 1. **no** (default) <br /> 2. **yes**           |  false   |
| speaker?         | string  | become speaker when joining Stage Channel <br /> 1. **yes** (default) <br /> 2. **no** |  false   |
| audioPlayerType? | string  | audio Player Type <br /> 1. **default** (default)                                      |  false   |
| debug?           | string  | enable debug (not recommended) <br /> 1. **no** (default) <br /> 2. **yes**            |  false   |

**You require `intents: ["GuildVoiceStates"]` in your main file.**

## Example(s)

This will make your bot join the voice channel you're currently in:

```javascript
bot.command({
  name: "joinVC",
  code: `
    $joinVC[$voiceID;yes;no;yes;default;no]
  `,
});
```
