---
title: $modifyChannelPerms
description: $modifyChannelPerms will modify a given channels permission overrides.
id: modifyChannelPerms
---

`$modifyChannelPerms` will modify a given channel's permission overrides.

## Usage

```php
$modifyChannelPerms[channelID;roruID;...perms]
```

## Parameters

| Field     | Type    | Description                                                                | Required |
| --------- | ------- | -------------------------------------------------------------------------- | :------: |
| channelID | integer | The channel ID of which you're trying to modify its permissions.           |   true   |
| roruID    | integer | The ID of an user or role. ( `$guildID` represents the `@everyone` role. ) |   true   |
| ...perms  | string  | The permissions that will be changed.                                      |   true   |

|     | Description                                          |
| --- | ---------------------------------------------------- |
| `-` | Deny a specific permission to someone or something.  |
| `+` | Allow a specific permission to someone or something. |
| `/` | Reset a specific permission to its default state.    |

You can find all permissions __[here](../../guides/9permissionsintents.md)__.

## Example(s)

This will allow `@everyone` to send messages and add reactions in the current channel:

```javascript
bot.command({
    name: 'modifyChannelPerms',
    code: `
  $modifyChannelPerms[$channelID;$guildID;+sendmessages;+addreactions]
  `
});
```
