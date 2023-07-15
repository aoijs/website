---
title: '$isDeafen'
description: '$isDeafen will check if a certain user is deafened or not.'
id: isDeafen
---

`$isDeafen` will check if a certain user is deafened or not.

## Usage

```php
$isDeafen[userID?;guildID?]
```

## Parameters

| Field    | Type    | Description                                               | Required |
| -------- | ------- | --------------------------------------------------------- |:--------:|
| userID?  | integer | User ID you want to check if they're deafened,            |  false   |
| guildID? | integer | The guild ID where you want to check if they're deafened. |  false   |

## Example(s)

This will return `false` or `true` depending on if you're currently deafened or not:

```javascript
bot.command({
    name: 'isDeafen',
    code: `
  $isDeafen[$authorID;$guildID]
  `
});
```
