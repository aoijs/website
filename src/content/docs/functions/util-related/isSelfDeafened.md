---
title: $isSelfDeafened
description: $isSelfDeafened is similar but not to confuse with `$isDeafen`, this will check if the user deafened themselves.
id: isSelfDeafened
---

`$isSelfDeafened` is similar but not to confuse with `$isDeafen`, this will check if the user deafened themselves.

## Usage

```php
$isSelfDeafened[userID?;guildID?]
```

## Parameters

| Field    | Type    | Description                                           | Required |
| -------- | ------- | ----------------------------------------------------- | :------: |
| userID?  | integer | ID of the user you want to check if they're deafened. |  false   |
| guildID? | integer | ID of the guild where they're deafened in.            |  false   |

## Example(s)

This will return either `true` or `false` depending on if you're deafened or not:

```javascript
bot.command({
  name: "isSelfDeafened",
  code: `
  $isSelfDeafened
  `,
});
```
