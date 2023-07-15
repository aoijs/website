---
title: '$interactionPing'
description: '$interactionPing devolverá la latencia de una interacción.'
id: interactionPing
---

`$interactionPing` devolverá la latencia de una interacción.

## Modo de uso

```php
$interactionPing
```

**Tenga en cuenta que se requiere `events: ["onInteractionCreate"]` para estar en su archivo principal**

## Ejemplo(s)

Esto devolverá la latencia de una interacción:

```javascript
bot.command({
    name: 'interactionPing',
    code: `
 $addButton[1;Test;primary;testButton;false]
 ¡Hazme clic!
  `
});

bot.interactionCommand({
    name: 'testButton',
    prototype: 'button',
    code: `
  $interactionUpdate[Esto me llevó: $interactionPing MS]
  `
});
```
