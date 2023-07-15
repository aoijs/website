---
title: '$isValidInvite'
description: '$isValidInvite will check if the given invite is valid.'
id: isValidInvite
---

`$isValidInvite` will check if the given invite is valid.

## Modo de uso

```php
$isValidInvite[inviteResolver]
```

## Parámetros

| Campo          | Tipo   | Parámetros         | Requerido |
| -------------- | ------ | ------------------ |:---------:|
| inviteResolver | string | Guild invite link. | verdadera |

## Ejemplo(s)

This will return `true` as `https://discord.gg/aoi-js-server-akarui-development-team-773352845738115102` is an valid invite:

```javascript
bot.command({
    name: 'isValidInvite',
    code: `
  $isValidInvite[https://discord.gg/aoi-js-server-akarui-development-team-773352845738115102]
  `
});
```
