---
title: '$findMember'
description: '$findMember encontrará un miembro específico en una guild específica por su nombre.'
id: findMember
---

`$findMember` encontrará un miembro específico en un gremio específico.

## Uso

```php
$findMember[usuarioResolver;volverYo mismo?;servidorID?]
```

## Parámetros

| Campo            | Tipo     | Parámetros                                                   | Requerido |
| ---------------- | -------- | ------------------------------------------------------------ |:---------:|
| usuario Resolver | cadena   | Usuario que desea encontrar.                                 | verdadero |
| volverYo mismo?  | booleano | Devuelve el ID del autor si no se encuentra el usuario dado. |   falso   |
| servidorID?      | entero   | ID del gremio donde el usuario está presente.                |   falso   |

## Ejemplo(s)

Esto devolverá tu ID ya que `Leref` no se encontró en el gremio dado:

```javascript
bot.command({
    name: 'findMember',
    code: `
  $findMember[Leref;true;$guildID]
  `
});
```
