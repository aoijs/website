---
title: '$deleteInvite'
description: '$deleteInvite eliminará una invitación específica al gremio.'
id: deleteInvite
---

`$deleteInvite` eliminará una invitación específica al gremio.

## Uso

```php
$deleteInvite[servidorID;codigo de invitacion;razon?]
```

## Parámetros

| Campo                | Tipo     | Parámetros                                                      | Requerido |
| -------------------- | -------- | --------------------------------------------------------------- |:---------:|
| servidorID           | entero   | El ID de la guild cuya invitación debe ser eliminada.           | verdadero |
| código de invitación | consulta | El código de invitación específico.                             | verdadero |
| ¿razón?              | string   | Razón que se mostrará en los registros de auditoría del gremio. |   falso   |

## Ejemplo(s)

Esto eliminará una invitación (no funcionará porque el código de invitación no existe):

```javascript
bot.command({
    name: 'deleteInvite',
    code: `
  $deleteInvite[$guildID;ifawd9a;Testing!]
  `
});
```