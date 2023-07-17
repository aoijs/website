---
title: $interactionUpdate
description: '$interactionUpdate aktualisiert eine bestehende Interaktion.'
id: interactionUpdate
---

`$interactionUpdate` gibt eine bestehende Interaktion zurück.

## Verwendung

```php
$interactionUpdate[content?;embeds?;components?;files?]
```

## Verwendung

| Feld         | Typ    | Beschreibung             | Erforderlich |
| ------------ | ------ | ------------------------ |:------------:|
| inhalt?      | string | Neuer Nachrichteninhalt. |    falsch    |
| einbetten?   | string | Embed parser.            |    falsch    |
| komponenten? | string | Component parser.        |    falsch    |
| dateien?     | string | File parser.             |    falsch    |

## Beispiel(e)

```javascript
bot.interactionCommand({
    name: "interactionUpdate",
    prototype: "slash",
    code: `
  $interactionReply[Hello, World!;;{actionRow:{button:Example Button!:primary:customID:false}};;everyone;false]
  `
});
```

```js
bot.interactionCommand({
    -Name: "customID",
    Prototyp: "button",
    Code: `
  $interactionUpdate[Bye, world.]
  `
});
```