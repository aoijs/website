---
title: '$guildBotCount'
description: '$guildBotCount devolverá la cantidad de Bots en su servidor.'
id: guildBotCount
---

`$guildBotCount` devolverá la cantidad de Bots en su servidor.

## Uso

```php
$guildBotCount[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                                   | Requerido |
| ----------- | ------- | ------------------------------------------------------------ |:---------:|
| servidorID? | integer | ID del servidor del que quieres obtener la cantidad de bots. |    no     |

## Ejemplo(s)

Esto devolverá la cantidad de bots en su servidor:

```javascript
bot.command({
    name: 'guildBotCount',
    code: `
  $guildBotCount
  `
});
```