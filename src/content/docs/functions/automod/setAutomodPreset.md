---
title: $setAutomodPreset
description: $setAutomodPreset will set the keyword preset for blocked words of automod rules.
id: setAutomodPreset
---

`$setAutomodPreset` will set the keyword preset for blocked words of automod rules.

## Usage

```php
$setAutomodPreset[...presets]
```

## Parameters

| Field      | Type                                                                                              | Description      | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ---------------- | :------: |
| ...presets | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The preset type. |   true   |

### Automod Presets

| Type          | Id   |
| :------------ | :--- |
| Profanity     | 1    |
| SexualContent | 2    |
| Slurs         | 3    |

## Example(s)

This will create a new automod rule with the BlockMessage action.

```javascript
client.command({
    name: "setAutomodPreset",
    code: `
    $createAutomodRule[$guildid;Automod Rule;true;Creating a new rule!]
    $setAutomodPreset[Slurs]
    $setAutomodType[Keyword]
    $setAutomodActions[BlockMessage;$channelId;60;You tried to say slurs, you got blocked!]  
    `
})