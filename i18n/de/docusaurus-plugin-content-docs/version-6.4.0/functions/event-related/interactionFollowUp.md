---
title: $interactionFollowUp
description: '$interactionFollowUp kann für JSON-Anfragen, Songinformationen oder Tracks verwendet werden, da dies mehr als 3 Sekunden dauert.'
id: interactionFollowUp
---

`$interactionFollowUp` kann für JSON-Anfragen, Songinformationen oder Tracks verwendet werden, da dies mehr als 3 Sekunden dauert.

## Verwendung

```php
$interactionFollowUp[content?;embeds?;components?;files?;ephemeral?]
```

## Verwendung

| Feld         | Typ     | Beschreibung                                                                                      | Erforderlich |
| ------------ | ------- | ------------------------------------------------------------------------------------------------- |:------------:|
| inhalt?      | string  | Nachrichteninhalt.                                                                                |    falsch    |
| einbetten?   | string  | Embed parser.                                                                                     |    falsch    |
| komponenten? | string  | Component parser.                                                                                 |    falsch    |
| dateien?     | string  | File parser.                                                                                      |    falsch    |
| flüchtig?    | boolean | vSichtbar nur für den Befehlsautor? <br /> 1. **true** <br /> 2. **false** (Standard) |    falsch    |

## Beispiel(e)

```javascript
bot.interactionCommand({
    Name: "interactionFollowUp",
    Prototyp: "slash",
    Code: `
  $interactionFollowUp[Bye, world!]
  $interactionDefer[true]
  `
});
```
