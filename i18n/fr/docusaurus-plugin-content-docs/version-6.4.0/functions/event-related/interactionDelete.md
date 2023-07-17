---
title: '$interactionDelete'
description: '$interactionDelete supprimera une réponse d''une interaction.'
id: interactionDelete
---

`$interactionDelete` supprimera une réponse d'une interaction.

## Utilisation

```php
$interactionDelete
```

## Exemple(s)

Ceci supprimera le message envoyé après 5 secondes.

```javascript
bot.interactionCommand({
    name: "interactionDelete",
    prototype: "button",
    code: `
  $interactionDelete
  $wait[5s]
  $interactionReply[Bonjour, tout le monde!;;;;everyone;false]
  `
});
```
