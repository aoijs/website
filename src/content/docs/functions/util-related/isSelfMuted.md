---
title: $isSelfMuted
description: $isSelfMuted is similar but not to confuse with `$isMuted`, this will check if the user muted themselves.
id: isSelfMuted
---

$isSelfMuted is similar but not to confuse with `$isMuted`, this will check if the user muted themselves.

## Usage

```php
$isSelfMuted[userID?;guildID?]
```

## Parameters

| Field    | Type                                                                                                | Description                                        | Required |
| -------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
| userID?  | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | ID of the user you want to check if they're muted. |  false   |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | ID of the guild where they're muted in.            |  false   |

## Example(s)

This will return either `true` or `false` depending on if you're muted (voice channel) or not:

```javascript
client.command({
  name: "isSelfDeafened",
  code: `
  $isSelfDeafened
  `,
});
```
