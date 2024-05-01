---
title: $setAutomodMentionRaidProtection
description: $setAutomodMentionRaidProtection will enable mention raid protection for the given automod rule.
id: setAutomodMentionRaidProtection
---

`$setAutomodMentionRaidProtection` will enable mention raid protection for the given automod rule.

## Usage

```php
$setAutomodMentionRaidProtection[type;channel;durationSeconds;customMessage?]
```

## Parameters

| Field    | Type                                                                                                | Description                     | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ------------------------------- | :------: |
| enabled? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Enable mention raid protection? |  false   |

## Example(s)

This will create a new automod rule with the mention raid protection enabled.

```javascript
client.command({
    name: "setAutomodMentionRaidProtection",
    code: `
    $createAutomodRule[$guildid;Automod Rule;true;Creating a new rule!]
    $setAutomodMentionRaidProtection[true]
    `
});
```
