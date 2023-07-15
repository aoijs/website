---
title: '$clientOwnerIDs'
description: '$clientOwnerIDs devolverá los ID de usuario del propietario del bot (o de varias personas si tienes un equipo).'
id: clientOwnerIDs
---

`$clientOwnerIDs` devolverá los ID de usuario del propietario del bot (o de varias personas si tienes un equipo).

## Modo de uso

```php
$clientOwnerIDs[separador?]
```

## Parámetros

| Campo      | Tipo   | Descripción                                                  | Requerido |
| ---------- | ------ | ------------------------------------------------------------ |:---------:|
| separador? | string | Separador para dividir los ID de usuario. (por defecto: `,`) |    no     |

## Ejemplo(s)

Esto probablemente devolverá su ID de usuario:

```javascript
bot.command({
    name: 'clientOwnerIDs',
    code: `
  $clientOwnerIDs
  `
});
```
