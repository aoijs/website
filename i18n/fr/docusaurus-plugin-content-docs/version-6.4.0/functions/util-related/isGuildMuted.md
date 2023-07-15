---
title: '$isGuildMuted'
description: '$isGuildMuted is similar but not to confuse with `$isMuted`, this will check if the user is server muted.'
id: isGuildMuted
---

`$isGuildMuted` is similar but not to confuse with `$isMuted`, this will check if the user is server muted.

## Usage

```php
$isGuildMuted[userID?;guildID?]
```

## Parameters

| Field    | Type    | Description                                                   | Required |
| -------- | ------- | ------------------------------------------------------------- |:--------:|
| userID?  | integer | The ID of the user you want to check if they're server muted. |  false   |
| guildID? | integer | The ID of the guild where they're server muted in.            |  false   |

## Example(s)

This will return either `true` or `false` depending on if you're server muted or not:

```javascript
bot.command({
    name: 'isGuildMuted',
    code: `
  $isGuildMuted[$authorID;$guildID]
  `
});
```
