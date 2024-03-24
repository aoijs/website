---
title: $deleteAutomodRule
description: $deleteAutomodRule will delete a given automod rule.
id: deleteAutomodRule
---

`$deleteAutomodRule` will delete a given automod rule. 

## Usage

```php
$deleteAutomodRule[guildID;automodRuleName;reason?;force?]
```

## Parameters

| Field           | Type                                                                                              | Description          | Required |
| --------------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID         | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | New message content. |   true   |
| automodRuleName | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New message content. |   true   |
| reason?         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New message content. |   true   |
| force?          | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New message content. |   true   |

## Example(s)

This will delete an automod rule with the name "Block Words":

```javascript
client.command({
    name: "deleteAutomodRule",
    code: `
    $deleteAutomodRule[$guildID;Block Words;Deleting this rule!;true]
    `
})