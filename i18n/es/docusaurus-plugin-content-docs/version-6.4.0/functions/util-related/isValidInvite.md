---
title: '$isValidInvite'
description: '$isValidInvite comprobará si la invitación dada es válida.'
id: isValidInvite
---

`$isValidInvite` comprobará si la invitación dada es válida.

## Uso

```php
$isValidInvite[inviteResolver]
```

## Parámetros

| Campo               | Tipo   | Parámetros                      | Requerido |
| ------------------- | ------ | ------------------------------- |:---------:|
| Resolver invitación | string | Enlace de invitación al gremio. | verdadera |

## Ejemplo(s)

Esto devolverá `verdadero` como `https://discord.gg/aoi-js-server-akarui-development-team-773352845738115102` es una invitación válida:

```javascript
bot.command({
    name: 'isValidInvite',
    code: `
  $isValidInvite[https://discord.gg/aoi-js-server-akarui-development-team-773352845738115102]
  `
});
```
