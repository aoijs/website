---
title: '$rolePosition'
description: '$rolePosition will return the role position of a specific role.'
id: rolePosition
---

`$rolePosition` will return the role position of a specific role.

## Modo de uso

```php
$rolePosition[roleID;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros    | Requerido |
| ----------- | ------ | ------------- |:---------:|
| roleID      | entero | The role ID.  | verdadero |
| servidorID? | entero | The guild ID. |    no     |

## Ejemplo(s)

This will return the role position of any role you might like, for this example, we'll use the `@everyone` role:

```javascript
bot.command({
    name: 'rolePosition',
    code: `
  $rolePosition[$guildID]
  `
});
```
