---
title: $interactionReply
description: '$interactionReply erlaubt es Ihnen, eine Interaktionsnachricht zu senden.'
id: interactionReply
---

`$interactionReply` ermöglicht es Ihnen, eine Interaktionsnachricht zu senden.

## Verwendung

```php
$interactionReply[content?;embeds?;components?;files?;allowedMentions?;ephemeral?]
```

## Verwendung

| Feld                  | Typ     | Beschreibung                                                                                           | Erforderlich |
| --------------------- | ------- | ------------------------------------------------------------------------------------------------------ |:------------:|
| inhalt?               | string  | Nachrichteninhalt.                                                                                     |    falsch    |
| einbetten?            | string  | Embed parser.                                                                                          |    falsch    |
| komponenten?          | string  | Component parser.                                                                                      |    falsch    |
| dateien?              | string  | File Parser.                                                                                           |    falsch    |
| erlaubte Erwähnungen? | string  | Erlaubte Erwähnungen? <br /> 1. **alle** <br /> 2. **Rollen** <br /> 3. **Benutzer** |    falsch    |
| flüchtig?             | boolean | Nur für den Befehlsautor sichtbar? <br /> 1. **true** <br /> 2. **false** (Standard)       |    falsch    |

## Beispiel(e)

```javascript
bot.interactionCommand({
    name: "interactionReply",
    prototype: "slash", // button/selectMenu/slash
    code: `
  $interactionReply[Hello, world!;;;;everyone;false]
  `
});
```
