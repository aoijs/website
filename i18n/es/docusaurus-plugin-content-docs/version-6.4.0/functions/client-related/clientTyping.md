---
title: '$clientTyping'
description: '$clientTyping hará que su bot escriba en un canal (mostrará que está escribiendo).'
id: clientTyping
---

`$clientTyping` hará que su bot escriba en un canal (mostrará que está escribiendo).

## Uso

```php
$clientTyping
```

## Ejemplo(s)

Esto mostrará su bot como escribiendo y enviando "¡Hola!" como mensaje:

```javascript
bot.command({
    name: 'clientTyping',
    code: `
  ¡Hola!
  $clientTyping
  `
});
```
