---
title: '$userStatus'
description: '$userStatus will return a user''s presence.'
id: userStatus
---

`$userStatus` will return a user's presence.

## Usage

```php
$userStatus[guildId?;userId?]
```

## Parameters

| Field    | Type    | Description                                                     | Required |
| -------- | ------- | --------------------------------------------------------------- |:--------:|
| guildId? | integer | The guild ID of which guild you want to retrieve the status of. |  false   |
| userId?  | integer | The ID of the user you want to return the status of.            |  false   |

## Example(s)

This will either return `idle`, `online`, `invisible` or `dnd` depending on your current presence:

```javascript
bot.command({
    name: 'userStatus',
    code: `
  $userStatus[$guildID;$authorID]
  `
});
```
