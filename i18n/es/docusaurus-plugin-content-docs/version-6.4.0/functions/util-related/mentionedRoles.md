---
title: '$mentionedRoles'
description: '$mentionedRoles will return the ID of a role retrieved from a message, this works similar as `$mentioned`.'
id: mentionedRoles
---

`$mentionedRoles` will return the ID of a role retrieved from a message.

## Uso

```php
$mentionedRoles[index]
```

## Parámetros

| Campo  | Tipo   | Parámetros                 | Requerido |
| ------ | ------ | -------------------------- |:---------:|
| índice | número | The index of the argument. | verdadera |

## Ejemplo(s)

This will return the ID of the **first** role mention if you attempt to mention any role in this command:

```javascript
bot.command({
    name: 'mentionedRoles',
    code: `
  $mentionedRoles[1]
  `
});
```
