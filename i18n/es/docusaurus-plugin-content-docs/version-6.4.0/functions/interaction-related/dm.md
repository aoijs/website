---
title: $dm
description: '$dm enviará un mensaje a los usuarios Mensajes Directos.'
id: dm
---

$dm enviará un mensaje a los usuarios Mensajes Directos.

## Uso

```php
$dm[ID de usuario]
```

## Parámetros

| Campo    | Tipo    | Parámetros                     | Requerido |
| -------- | ------- | ------------------------------ |:---------:|
| usarioID | integer | El usuario que recibirá el DM. | verdadera |

**Important**:
- No puedes DM otros bots.
- No eres capaz de DM personas que cerraron sus DMs.

## Ejemplo(s)

Esto le enviará un DM que contenga "¡Hola! ¿Realmente creías que esto funciona?":

```javascript
bot.command({
    name: 'addButton',
    code: `
    Hola! ¿Realmente creías que esto funciona?":
  $dm[$authorID]
  `
});
```