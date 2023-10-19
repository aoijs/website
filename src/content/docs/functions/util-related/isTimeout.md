---
title: $isTimeout
description: $isTimeout will check if the user is timeouted with Discord's built-in timeout feature.
id: isTimeout
---

`$isTimeout` will check if the user is timeouted with Discord's built-in timeout feature.

## Usage

```php
$isTimeout[guildID?;userID?]
```

## Parameters

| Field    | Type                                                                                                | Description                                     | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the guild where they're timeouted in. |  false   |
| userID?  | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The ID of the user that's timeouted.            |  false   |

## Example(s)

This will check if you're timeouted and either return `true` or `false`:

```javascript
client.command({
  name: "isTimeout",
  code: `
  $isTimeout[$guildID;$authorID]
  `,
});
```
