---
title: $getAutomodRuleId
description: $getAutomodRuleId will fetch and return the Id of a given automod rule.
id: getAutomodRuleId
---

`$getAutomodRuleId` will fetch and return the Id of a given automod rule.

## Usage

```php
$getAutomodRuleId[guildID;name;force?]
```

## Parameters

| Field   | Type            | Description                                           | Required |
| ------- | --------------- | ----------------------------------------------------- | :------: |
| guildID | integer         | The ID of the guild where the automod rule exists in. |   true   |
| name    | string, integer | The name or ID of the automod rule.                   |   true   |
| force?  | boolean         | Force fetch the guild's automod rules.                |  false   |

## Example(s)

This will return the Id of the given automod rule while force fetching all guild automod rules:

```javascript
client.command({
  name: "getAutomodRuleId",
  code: `
  $getAutomodRuleId[$guildId;Automod Rule;true]
  `
});
```
