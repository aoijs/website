---
title: $setAutomodKeywordFilter
description: $setAutomodKeywordFilter will disallow words for the given automod rule.
id: setAutomodKeywordFilter
---

`$setAutomodKeywordFilter` will disallow words for the given automod rule.

## Usage

```aoi
$setAutomodKeywordFilter[...words]
```

## Parameters

| Field    | Type                                                                                              | Description             | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------- | :------: |
| ...words | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The words to blacklist. |   true   |

## Example(s)

This will create a new automod rule with the BlockMessage action and two blacklisted words.

```javascript
client.command({
    name: "setAutomodKeywordFilter",
    code: `
    $createAutomodRule[$guildid;Automod Rule;true;Creating a new rule!]
    $setAutomodPreset[Slurs]
    $setAutomodType[Keyword]
    $setAutomodKeywordFilter[Leref;Ayaka]
    $setAutomodActions[BlockMessage;$channelId;60;You tried to say slurs, you got blocked!]  
    `
});
```
