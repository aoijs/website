---
title: $setAutomodMentionTotalLimit
description: $setAutomodMentionTotalLimit will set the allowed mention limit for the selected automod rule.
id: setAutomodMentionTotalLimit
---

`$setAutomodMentionTotalLimit` will set the allowed mention limit for the selected automod rule.

## Usage

```php
$setAutomodMentionTotalLimit[limit]
```

## Parameters

| Field | Type                                                                                              | Description                      | Required |
| ----- | ------------------------------------------------------------------------------------------------- | -------------------------------- | :------: |
| limit | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The maximum of allowed mentions. |   true   |

## Example(s)

This will create a new automod rule with the maximum allowed mention limit of 3.

```javascript
client.command({
    name: "setAutomodMentionTotalLimit",
    code: `
    $createAutomodRule[$guildid;Automod Rule;true;Creating a new rule!]
    $setAutomodMentionTotalLimit[3]
    `
});
```
