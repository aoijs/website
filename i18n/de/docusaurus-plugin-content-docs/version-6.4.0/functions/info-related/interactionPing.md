---
title: $interactionPing
description: '$interactionPing wird die Latenz einer Interaktion zurückgeben.'
id: interactionPing
---

`$interactionPing` wird die Latenz einer Interaktion zurückgeben.

## Verwendung

```php
$interactionPing
```

**Bitte beachten Sie, dass Sie `Ereignisse benötigen: ["onInteractionCreate"]` um in Ihrer Hauptdatei zu sein**

## Beispiel(e)

Dies gibt die Latenz einer Interaktion zurück:

```javascript
bot.command({
    name: 'interactionPing',
    code: `
 $addButton[1;Test;primary;testButton;false]
 Klicke mich!
  `
});

bot.interactionCommand({
    name: 'testButton',
    prototype: 'button',
    code: `
  $interactionUpdate[This took me: $interactionPing MS!]
  `
});
```
