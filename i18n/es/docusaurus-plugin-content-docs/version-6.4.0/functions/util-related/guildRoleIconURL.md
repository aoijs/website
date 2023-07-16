---
title: '$guildRoleIconURL'
description: '$guildRoleIconURL will retrieve the image URL of the role icon.'
id: guildRoleIconURL
---

`$guildRoleIconURL` will retrieve the image URL of the role icon.

## Uso

```php
$guildRoleIconURL[guildId?;roleId]
```

## Parámetros

| Campo    | Tipo   | Parámetros                                     | Requerido |
| -------- | ------ | ---------------------------------------------- |:---------:|
| guildId? | entero | ID of the guild where the role exists.         |    no     |
| roleId   | entero | ID of the role you want to check if it exists. | verdadero |

## Ejemplo(s)

This will return the image URL of the role icon:

```javascript
bot.command({
    name: 'guildRoleIconURL',
    code: `
  $guildRoleIconURL[$guildID;900004369355931729]
  `
});
```