---
title: $setAutomodExemptChannels
description: $setAutomodExemptChannels will exclude channels for the given automod rule.
id: setAutomodExemptChannels
---

`$setAutomodExemptChannels` will exclude channels for the given automod rule.

## Usage

```php
$setAutomodExemptChannels[...channels]
```

## Parameters

| Field       | Type                                                                                              | Description              | Required |
| ----------- | ------------------------------------------------------------------------------------------------- | ------------------------ | :------: |
| ...channels | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The channels to exclude. |   true   |

## Example(s)

This will create a new automod rule with the BlockMessage action and two excluded channels.

```javascript
client.command({
    name: "setAutomodExemptChannels",
    code: `
    $createAutomodRule[$guildid;Automod Rule;true;Creating a new rule!]
    $setAutomodPreset[Slurs]
    $setAutomodType[Keyword]
    $setAutomodExemptChannels[$channelId;$randomChannelId]
    $setAutomodActions[BlockMessage;$channelId;60;You tried to say slurs, you got blocked!]  
    `
});
```
