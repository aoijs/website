---
title: '$modifyChannelPerms'
description: '$modifyChannelPerms will modify a given channels permission overrides.'
id: modifyChannelPerms
---

`$modifyChannelPerms` will modify a given channel's permission overrides.

## प्रोयोग

```php
$modifyChannelPerms[channelID;roruID;...perms]
```

## पैरामीटर्स

| फील्ड     | टाइप     | डिस्क्रिप्शन                                                               | चाहिए |
| --------- | -------- | -------------------------------------------------------------------------- |:-----:|
| channelID | integer  | The channel ID of which you're trying to modify its permissions.           | true  |
| roruID    | integer  | The ID of an user or role. ( `$guildID` represents the `@everyone` role. ) | true  |
| ...perms  | स्ट्रिंग | The permissions that will be changed.                                      | true  |

|     | डिस्क्रिप्शन                                         |
| --- | ---------------------------------------------------- |
| `-` | Deny a specific permission to someone or something.  |
| `+` | Allow a specific permission to someone or something. |
| `/` | Reset a specific permission to its default state.    |

You can find all permissions __[here](../../guides/Client/2permissionsintents.md)__.

## ट्रू (हा)

This will allow `@everyone` to send messages and add reactions in the current channel:

```javascript
bot.command({
    name: 'modifyChannelPerms',
    code: `
  $modifyChannelPerms[$channelID;$guildID;+sendmessages;+addreactions]
  `
});
```
