---
title: '$modifyChannelPerms'
description: '$modifyChannelPerms will modify a given channels permission overrides.'
id: modifyChannelPerms
---

`$modifyChannelPerms` will modify a given channel's permission overrides.

## الاستخدام

```php
$modifyChannelPerms[channelID;roruID;...perms]
```

## البارامترات

| Field     | النوع   | الديسكبربشين                                                               | مطلوب |
| --------- | ------- | -------------------------------------------------------------------------- |:-----:|
| channelID | Integer | The channel ID of which you're trying to modify its permissions.           | true  |
| roruID    | Integer | The ID of an user or role. ( `$guildID` represents the `@everyone` role. ) | true  |
| ...perms  | string  | The permissions that will be changed.                                      | true  |

|     | الديسكبربشين                                         |
| --- | ---------------------------------------------------- |
| `-` | Deny a specific permission to someone or something.  |
| `+` | Allow a specific permission to someone or something. |
| `/` | Reset a specific permission to its default state.    |

You can find all permissions __[here](../../guides/Client/2permissionsintents.md)__.

## مثال

This will allow `@everyone` to send messages and add reactions in the current channel:

```javascript
bot.command({
    name: 'modifyChannelPerms',
    code: `
  $modifyChannelPerms[$channelID;$guildID;+sendmessages;+addreactions]
  `
});
```
