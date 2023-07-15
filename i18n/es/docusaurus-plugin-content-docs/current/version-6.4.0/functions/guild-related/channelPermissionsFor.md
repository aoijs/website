---
title: '$channelPermissionsFor'
description: '$channelPermissionsFor will return the channel permissions of a specific user or role.'
id: channelPermissionsFor
---

`$channelPermissionsFor` will return the channel permissions of a specific user or role.

## Modo de uso

```php
$channelPermissionsFor[userOrRoleID?;channelID?;sep?]
```

## Parámetros

| Campo        | Tipo   | Parámetros                                                                    | Requerido |
| ------------ | ------ | ----------------------------------------------------------------------------- |:---------:|
| userOrRoleID | entero | The user or role ID whose permissions shall be returned.                      | verdadero |
| canalID      | entero | The channel ID of the channel of which the permissions should be returned of. | verdadero |
| sep?         | string | The separator which will be used to separate the permissions, by default ",". |   falso   |

## Ejemplo(s)

This will return your permissions in the channel where you execute the command:

```javascript
bot.command({
    name: 'channelPermissionsFor',
    code: `
  $channelPermissionsFor[$authorID;$channelID;, ]
  `
});
```
