---
title: $setGuildName
description: $setGuildName will change a guilds' name.
id: setGuildName
---

`$setGuildName` will change a guilds' name.

## Usage

```php
$setGuildName[name;guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                      | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------ | :------: |
| name     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new guild name.                              |   true   |
| guildID? | integer                                                                                           | The ID of the guild whose name will be modified. |  false   |

## Example(s)

This will change guild's name you're executing the command in to your username:

```javascript
client.command({
  name: "setGuildName",
  code: `
   $setGuildName[$username[$authorID];$guildID]`,
});
```
