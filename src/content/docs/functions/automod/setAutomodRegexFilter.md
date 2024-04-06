---
title: $setAutomodRegexFilter
description: $setAutomodRegexFilter will filter words according to the given regex of the automod rule.
id: setAutomodRegexFilter
---

`$setAutomodRegexFilter` will filter words according to the given regex of the automod rule.

## Usage

```php
$setAutomodRegexFilter[...regex]
```

## Parameters

| Field    | Type                                                                                              | Description                    | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------ | :------: |
| ...regex | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The regex to filter words for. |   true   |

## Example(s)

This will create a new automod rule with the BlockMessage action and block of the word "Hello".

```javascript
client.command({
    name: "setAutomodRegexFilter",
    code: `
    $createAutomodRule[$guildid;Automod Rule;true;Creating a new rule!]
    $setAutomodPreset[Slurs]
    $setAutomodType[Keyword]
    $setAutomodRegexFilter[/Hello/g]
    $setAutomodActions[BlockMessage;$channelId;60;You tried to say slurs, you got blocked!]  
    `
})