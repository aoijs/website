---
title: '$banCount'
description: '$banCount devolverá la cantidad de usuarios baneados de un servidor específico.'
id: banCount
---

`$banCount` devolverá la cantidad de usuarios baneados de un servidor específico.

## Modo de uso

```php
$banCount[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                                                | Requerido |
| ----------- | ------- | ------------------------------------------------------------------------- | --------- |
| servidorID? | integer | ID del servidor del que quieres obtener la cantidad de usuarios baneados. | no        |

#### Tenga en cuenta que su bot requiere permisos para `VIEW_AUDIT_LOG`

## Ejemplo(s)

Esto devolverá la cantidad de usuarios baneados en su servidor:

```javascript
bot.command({
    name: 'banCount',
    code: `
  $banCount
  `
});
```