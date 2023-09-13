---
title: $setClientAvatar
description: $setClientAvatar will change the clients' avatar.
id: setClientAvatar
---

`$setClientAvatar` will change the clients' avatar.

## Usage

```php
$setClientAvatar[URL]
```

## Parameters

| Field | Type   | Description         | Required |
| ----- | ------ | ------------------- | :------: |
| URL   | string | The new avatar URL. |   true   |

## Example(s)

This will change the client's avatar to the command author's user avatar:

```javascript
bot.command({
  name: "setClientAvatar",
  code: `
   $setClientAvatar[$userAvatar[$authorID]]`,
});
```
