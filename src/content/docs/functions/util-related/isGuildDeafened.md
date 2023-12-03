---
title: $isGuildDeafened
description: $isGuildDeafened is similar but not to confuse with `$isDeafen` this will check if the user is server deafened.
id: isGuildDeafened
---

`$isGuildDeafened` is similar but not to confuse with `$isDeafen` this will check if the user is server deafened.

## Usage

```php
$isGuildDeafened[userID?;guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                      | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | :------: |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the user you want to check if they're server deafened. |  false   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild where they're server deafened in.            |  false   |

## Example(s)

This will return either `true` or `false` depending on if you're server deafened or not:

```javascript
client.command({
  name: "isGuildDeafened",
  code: `
  $isGuildDeafened
  `
});
```
