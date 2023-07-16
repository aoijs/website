---
title: $interactionEdit
description: '$interactionEdit gibt eine Interaktion zurück.'
id: interactionEdit
---

`$interactionEdit` gibt eine Interaktion zurück.

## Verwendung

```php
$interactionEdit[content?;embeds?;components?;files?;allowedMentions?]
```

## Verwendung

| Feld                  | Typ    | Beschreibung                                                                                           | Erforderlich |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------ |:------------:|
| inhalt?               | string | Neuer Nachrichteninhalt.                                                                               |    falsch    |
| einbetten?            | string | Embed parser.                                                                                          |    falsch    |
| komponenten?          | string | Component parser.                                                                                      |    falsch    |
| dateien?              | string | File parser.                                                                                           |    falsch    |
| erlaubte Erwähnungen? | string | Erlaubte Erwähnungen? <br /> 1. **Benutzer** <br /> 2. **Rollen** <br /> 3. **Alle** |    falsch    |

## Beispiel(e)

```javascript
bot.interactionCommand({
    name: "interactionEdit",
    prototype: "slash",
    code: `
  $interactionEdit[Bye, World!;;;;everyone]
  $wait[5s]
  $interactionReply[Hello, World!;;;;everyone;false]
  `
});
```
