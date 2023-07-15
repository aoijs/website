---
title: '$dm'
description: '$dm will send a message to an users Direct Messages.'
id: mensaje directo
---

`$dm` will send a message to an users Direct Messages.

## Modo de uso

```php
$dm[userID]
```

## Parámetros

| Campo    | Tipo    | Parámetros                           | Requerido |
| -------- | ------- | ------------------------------------ |:---------:|
| usarioID | integer | The user which shall receive the DM. | verdadera |

**Important**:
- You are unable to DM other bots.
- You are unable to DM people who closed their DMs.

## Ejemplo(s)

This will send an DM to you containing "Hello! Did you really think this works?":

```javascript
bot.command({
    name: 'dm',
    code: `
  Hello! Did you really think this works?
  $dm[$authorID]
  `
});
```