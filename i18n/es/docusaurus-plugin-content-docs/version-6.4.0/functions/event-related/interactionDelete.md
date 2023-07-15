---
title: '$interactionDelete'
description: '$interactionDelete eliminará una respuesta de una interacción.'
id: interactionDelete
---

`$interactionDelete` eliminará una respuesta de una interacción.

## Uso

```php
$interactionDelete
```

## Ejemplo(s)

Esto eliminará la interacción después de 5 segundos.

```javascript
bot.interactionCommand({
    name: "interactionDelete",
    prototype: "button",
    code: `
  $interactionDelete
  $wait[5s]
  $interactionReply[¡Hola Mundo!;;;;everyone;false]
  `
});
```
