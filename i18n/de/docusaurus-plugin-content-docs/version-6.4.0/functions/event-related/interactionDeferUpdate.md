---
title: $interactionDeferUpdate
description: '$interactionDeferUpdate wehrt die Interaktionsnachricht ab, die aktualisiert wird.'
id: interactionDeferUpdate
---

`$interactionDeferUpdate` entschärft die Interaktionsnachricht, die aktualisiert wird.

## Verwendung

```php
$interactionDeferUpdate[ephemeral]
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
   $interactionFollowUp[This is the first message!]
   $interactionEdit[This is the second message!]
   $interactionDeferUpdate[true]`
});
```