---
title: $setGuildIcon
description: $setGuildIcon will change a guilds' icon.
id: setGuildIcon
---

`$setGuildIcon` will change a guilds' icon.

## Usage

```php
$setGuildIcon[URL;guildID?]
```

## Parameters

| Field    | Type    | Description                                  | Required |
| -------- | ------- | -------------------------------------------- | :------: |
| URL      | string  | URL of the new guild Icon.                   |   true   |
| guildID? | integer | The guild ID of where to set the guild Icon. |  false   |

## Example(s)

This will change guild's icon you're executing the command in to your user avatar:

```javascript
client.command({
  name: "setGuildIcon",
  code: `
   $setGuildIcon[$userAvatar[$authorID];$guildID]`,
});
```
