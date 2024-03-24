---
title: $setAutomodAllowList
description: $setAutomodAllowList will allow words for the given automod rule.
id: setAutomodAllowList
---

`$setAutomodAllowList` will allow words for the given automod rule.

## Usage

```php
$setAutomodAllowList[...words]
```

## Parameters

| Field    | Type                                                                                              | Description             | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------- | :------: |
| ...words | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The words to whitelist. |   true   |

## Example(s)

This will create a new automod rule with the BlockMessage action and two whitelisted words.

```javascript
client.command({
    name: "setAutomodAllowList",
    code: `
    $createautomodrule[$guildid;Automod Rule;true;Creating a new rule!]
    $setAutomodPreset[Slurs]
    $setAutomodType[Keyword]
    $setAutomodAllowList[Leref;Ayaka]
    $setAutomodAllowList[BlockMessage;$channelId;60;You tried to say slurs, you got blocked!]  
    `
})