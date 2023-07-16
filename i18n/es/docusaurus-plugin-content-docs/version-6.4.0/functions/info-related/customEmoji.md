---
title: '$customEmoji'
description: '$customEmoji devolverá un emoji personalizado.'
id: customEmoji
---

`$customEmoji` devolverá un emoji personalizado.

## Uso

```php
$customEmoji[emojiResolver;servidorID?]
```

## Parámetros

| Campo         | Tipo            | Parámetros                                                                                                  | Requerido |
| ------------- | --------------- | ----------------------------------------------------------------------------------------------------------- |:---------:|
| emojiResolver | consulta        | Nombre o ID del emoji.                                                                                      | verdadero |
| servidorID?   | string, integer | De dónde es el emoji. <br /> 1. **global** <br /> 2. **guildID** - sustituir por ID de servidor |    no     |

## Ejemplo(s)

Para enviar un emoji personalizado de su elección, sustituya emojiResolver por un nombre o ID de emoji real:

Intenta buscar el emoji en todos los servidores en los que esté el bot:
```javascript
bot.command({
    name: 'customEmoji',
    code: `
  $customEmoji[emojiResolver;global]
  `
});
```

Intenta devolver el emoji del servidor dado:
```javascript
bot.command({
    name: 'customEmoji',
    code: `
  $customEmoji[emojiResolver;ID específico del servidor]
  `
});
```