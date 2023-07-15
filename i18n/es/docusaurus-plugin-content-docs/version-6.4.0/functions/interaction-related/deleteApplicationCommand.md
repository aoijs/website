---
title: '$deleteApplicationCommand'
description: '$deleteApplicationCommand creará un comando de aplicación.'
id: deleteApplicationCommand
---

`$deleteApplicationCommand` eliminará un comando de aplicación.

## Uso

```php
$deleteApplicationCommand[servidorID/global;id]
```

## Parámetros

| Campo             | Tipo            | Parámetros                                                                                        | Requerido |
| ----------------- | --------------- | ------------------------------------------------------------------------------------------------- |:---------:|
| servidorID/global | string, integer | Tipo de comando de aplicación. <br/> 1. **global** <br/> 2. **un guildID específico** | verdadero |
| id                | entero          | ID de comando de aplicación que será eliminado.                                                   | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: 'deleteApplicationCommand',
    code: `
  $deleteApplicationCommand[$guildID;$getApplicationCommandID[application-command-name;$guildID]]
  `
});
```
