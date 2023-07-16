---
title: $interactionDefer
description: '$interactionDefer wehrt eine Interaktion der letzten 15 Minuten ab.'
id: interactionDefer
---

`$interactionDefer` entschärft eine Interaktion der letzten 15 Minuten.

## Verwendung

```php
$interactionDefer[ephemeral]
```

## Verwendung

| Feld     | Typ     | Beschreibung                       | Erforderlich |
| -------- | ------- | ---------------------------------- |:------------:|
| flüchtig | boolean | Nur für den Befehlsautor sichtbar? |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    name: 'exampleButton',
    type: 'interaction',
    prototype: 'button',
    code: `
   $interactionFollowUp[This is the second message!] 
   $interactionFollowUp[This is the first message!] 
   $interactionDefer[true]`
});
```