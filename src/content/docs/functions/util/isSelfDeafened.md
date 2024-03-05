---
title: $isSelfDeafened
description: $isSelfDeafened is similar but not to confuse with `$isDeafen` this will check if the user deafened themselves.
id: isSelfDeafened
---

`$isSelfDeafened` is similar but not to confuse with `$isDeafen` this will check if the user deafened themselves.

## Usage

```php
$isSelfDeafened[userID?;guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                           | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | :------: |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the user you want to check if they're deafened. |  false   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the guild where they're deafened in.            |  false   |

## Example(s)

This will return either `true` or `false` depending on if you're deafened or not:

```javascript
client.command({
  name: "isSelfDeafened",
  code: `
  $isSelfDeafened
  `
});
```
