---
title: $membersCount
description: $membersCount will return a guild's member count.
id: membersCount
---

`$membersCount` will return a guild's member count.

## Usage

```php
$membersCount[guildID?;presence?;countBot?]
```

## Parameters

| Field     | Type    | Description                                                                                                                           | Required |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| guildID?  | integer | The ID of the guild.                                                                                                                  |  false   |
| presence? | string  | The presence of the users <br /> 1. **all** (default) <br /> 2. **dnd** <br /> 3. **idle** <br /> 4. **offline** <br /> 5. **online** |  false   |
| countBot? | boolean | Count bots? <br /> 1. **true** (default) <br /> 2. **false**                                                                          |  false   |

## Example(s)

This will return the amount of offline users (including bots) in your guild:

```javascript
client.command({
  name: "membersCount",
  code: `
  $membersCount[$guildID;offline;true]
  `
});
```
