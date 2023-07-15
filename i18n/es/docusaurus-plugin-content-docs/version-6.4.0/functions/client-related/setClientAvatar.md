---
title: '$setClientAvatar'
description: '$setClientAvatar cambiará el avatar del cliente.'
id: setClientAvatar
---

`$setClientAvatar` cambiará el avatar del cliente.

## Modo de uso

```php
$setClientAvatar[URL]
```

## Parámetros

| Campo | Tipo   | Descripción              | Requerido |
| ----- | ------ | ------------------------ |:---------:|
| URL   | string | La nueva URL del avatar. |    sí     |

## Ejemplo(s)

Esto cambiará el avatar del cliente por el avatar de usuario del autor del comando:

```javascript
bot.command({
    name: 'setClientAvatar',
    code: `
   $setClientAvatar[$userAvatar[$authorID]]`
});
```