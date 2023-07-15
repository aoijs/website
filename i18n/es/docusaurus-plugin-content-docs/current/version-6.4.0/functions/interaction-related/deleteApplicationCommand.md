---
title: '$deleteApplicationCommand'
description: '$deleteApplicationCommand will delete an application command.'
id: deleteApplicationCommand
---

`$deleteApplicationCommand` will delete an application command.

## Modo de uso

```php
$deleteApplicationCommand[guildID/global;id]
```

## Parámetros

| Campo          | Tipo            | Parámetros                                                                              | Requerido |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:---------:|
| guildID/global | string, integer | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | verdadero |
| id             | entero          | Application command ID which will be deleted.                                           | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: 'deleteApplicationCommand',
    code: `
  $deleteApplicationCommand[$guildID;$getApplicationCommandID[application-command-name;$guildID]]
  `
});
```
