---
title: '$guildCount'
description: '$guildCount devolverá la cantidad de gremios de donde se encuentra tu bot.'
id: guildCount
---

`$guildCount` devolverá la cantidad de Bots en su servidor.

## Uso

```php
$guildCount
```

## Ejemplo(s)

Esto devolverá la cantidad de servidores en los que se encuentra tu bot:

```javascript
bot.command({
    name: 'guildCount',
    code: `
¡Estoy en los gremios de $guildCount!

  `
});
```
