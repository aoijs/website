---
title: '$modifyChannelPerms'
description: '$modifyChannelPerms will modify a given channels permission overrides.'
id: modifyChannelPerms
---

`$modifyChannelPerms` will modify a given channel's permission overrides.

## Використання

```php
$modifyChannelPerms[channelID;roruID;...perms]
```

## Параметри

| Поле      | Тип     | Опис                                                                       | Обов'язковий |
| --------- | ------- | -------------------------------------------------------------------------- |:------------:|
| channelID | integer | The channel ID of which you're trying to modify its permissions.           |     так      |
| roruID    | integer | The ID of an user or role. ( `$guildID` represents the `@everyone` role. ) |     так      |
| ...perms  | рядок   | The permissions that will be changed.                                      |     так      |

|     | Опис                                                 |
| --- | ---------------------------------------------------- |
| `-` | Deny a specific permission to someone or something.  |
| `+` | Allow a specific permission to someone or something. |
| `/` | Reset a specific permission to its default state.    |

You can find all permissions __[here](../../guides/Client/2permissionsintents.md)__.

## Приклад(и)

This will allow `@everyone` to send messages and add reactions in the current channel:

```javascript
bot.command({
    name: 'modifyChannelPerms',
    code: `
  $modifyChannelPerms[$channelID;$guildID;+sendmessages;+addreactions]
  `
});
```
