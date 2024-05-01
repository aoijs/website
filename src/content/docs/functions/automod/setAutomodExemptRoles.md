---
title: $setAutomodExemptRoles
description: $setAutomodExemptRoles will exclude roles for the given automod rule.
id: setAutomodExemptRoles
---

`$setAutomodExemptRoles` will exclude roles for the given automod rule.

## Usage

```php
$setAutomodExemptRoles[...roles]
```

## Parameters

| Field    | Type                                                                                              | Description           | Required |
| -------- | ------------------------------------------------------------------------------------------------- | --------------------- | :------: |
| ...roles | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The roles to exclude. |   true   |

## Example(s)

This will create a new automod rule with the BlockMessage action and one excluded role.

```javascript
client.command({
    name: "setAutomodExemptRoles",
    code: `
    $createAutomodRule[$guildid;Automod Rule;true;Creating a new rule!]
    $setAutomodPreset[Slurs]
    $setAutomodType[Keyword]
    $setAutomodExemptRoles[$findRole[Support]]
    $setAutomodActions[BlockMessage;$channelId;60;You tried to say slurs, you got blocked!]  
    `
});
```
