---
title: '$setClientName'
description: '$setClientName cambiará el nombre de usuario de Discord del cliente.'
id: setClientName
---

`$setClientName` cambiará el nombre de usuario de Discord del cliente.

## Uso

```php
$setClientName[nombre de usario]
```

## Parámetros

| Campo             | Tipo   | Descripción                             | Requerido |
| ----------------- | ------ | --------------------------------------- |:---------:|
| nombre de usuario | string | El nuevo nombre de usuario del cliente. |    sí     |

## Ejemplo(s)

Esto cambiará el nombre de usuario del cliente por el nombre de usuario del autor del comando:

```javascript
bot.command({
    name: 'setClientName',
    code: `
   $setClientName[$username[$authorID]]`
});
```