---
title: '$channelPermissionsFor'
description: '$channelPermissionsFor will return the channel permissions of a specific user or role.'
id: channelPermissionsFor
---

`$channelPermissionsFor` will return the channel permissions of a specific user or role.

## Використання

```php
$channelPermissionsFor[userOrRoleID?;channelID?;sep?]
```

## Параметри

| Поле         | Тип     | Опис                                                                          | Обов'язковий |
| ------------ | ------- | ----------------------------------------------------------------------------- |:------------:|
| userOrRoleID | integer | The user or role ID whose permissions shall be returned.                      |     так      |
| channelID    | integer | The channel ID of the channel of which the permissions should be returned of. |     так      |
| sep?         | рядок   | The separator which will be used to separate the permissions, by default ",". |      ні      |

## Приклад(и)

This will return your permissions in the channel where you execute the command:

```javascript
bot.command({
    name: 'channelPermissionsFor',
    code: `
  $channelPermissionsFor[$authorID;$channelID;, ]
  `
});
```
