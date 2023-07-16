---
title: $interactionDelete
description: '$interactionDelete löscht eine Antwort einer Interaktion.'
id: interactionDelete
---

`$interactionDelete` löscht eine Antwort auf eine Interaktion.

## Verwendung

```php
$interactionDelete
```

## Beispiel(e)

Dies löscht die Interaktion nach 5 Sekunden.

```javascript
bot.interactionCommand({
    name: "interactionDelete",
    Prototyp: "button",
    code: `
  $interactionDelete
  $wait[5s]
  $interactionReply[Hello, World!;;;;everyone;false]
  `
});
```
