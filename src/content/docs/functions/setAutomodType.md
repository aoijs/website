---
title: $setAutomodType
description: $setAutomodType will set the automod type.
id: setAutomodType
---

`$setAutomodType` will set the automod type.

## Usage

```aoi
$setAutomodType[type]
```

## Parameters

| Field | Type                                                                                              | Description       | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------- | :------: |
| type  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The automod type. |   true   |

### Automod Types

| Type          | Id  |
| :------------ | :-- |
| Keyword       | 1   |
| Spam          | 3   |
| KeywordPreset | 4   |
| MentionSpam   | 5   |

## Example(s)

This will create a new automod rule with the BlockMessage action and `Slurs` Preset.

```javascript
client.command({
    name: "setAutomodType",
    code: `
    $createAutomodRule[$guildid;Automod Rule;true;Creating a new rule!]
    $setAutomodPreset[Slurs]
    $setAutomodType[Keyword]
    $setAutomodActions[BlockMessage;$channelId;60;You tried to say slurs, you got blocked!]  
    `
});
```
