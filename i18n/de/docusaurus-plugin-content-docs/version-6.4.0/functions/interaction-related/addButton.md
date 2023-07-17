---
title: $addButton
description: '$addButton wird einen Button zur Nachricht des Bots hinzufügen.'
id: addButton
---

`$addButton` wird einen Button zur Nachricht des Bots hinzufügen.

## Verwendung

```php
$addButton[index;label;style;customID;disabled?;emoji?]
```

## Verwendung

| Feld         | Typ     | Beschreibung                                                                                                            | Erforderlich |
| ------------ | ------- | ----------------------------------------------------------------------------------------------------------------------- |:------------:|
| index        | anzahl  | In welcher (Aktion)Zeile wird der Button angezeigt.                                                                     |     wahr     |
| bezeichnen   | string  | Der Text, der auf der Schaltfläche als Label angezeigt wird.                                                            |     wahr     |
| stile        | string  | Der Button **[Stil](https://discord.com/developers/docs/interactions/message-components#button-object-button-styles)**. |     wahr     |
| kundenID     | string  | Die benutzerdefinierte Komponenten-ID zur Identifizierung der Schaltfläche.                                             |     wahr     |
| deaktiviert? | boolean | Den Knopf unbrauchbar/deaktivieren? <br /> 1. **true** <br /> 2. **false** (Standard)                       |    falsch    |
| emoji?       | string  | Der Emoji, der auf dem Knopf angezeigt wird.                                                                            |    falsch    |

<details open>
  <summary><h3> Button-Typen </h3></summary>

| Name          | Wert  | Farbe                        |                                                                                             |
| ------------- | ----- | ---------------------------- | ------------------------------------------------------------------------------------------- |
| Primär        | 1     | verschwommen                 | `$addButton[1;Example Button!;primary;customID;false]`                                      |
| Sekundär      | 2     | grau                         | `$addButton[1;Example Button!;secondary;customID;false]`                                    |
| Erfolg        | 3     | grün                         | `$addButton[1;Example Button!;success;customID;false]`                                      |
| Gefahr        | 4     | rot                          | `$addButton[1;Example Button!;danger;customID;false]`                                       |
| Link          | 5     | grau, navigiert zu einer URL | `$addButton[1;Example Button!;link;https://discord.gg;false]`                               |
| Eigene Emoji  | jeder | jeder                        | `$addButton[1;Example Button!;link;customID;false;emojiName,emojiID,animated (true/false)]` |
| Unicode Emoji | jeder | jeder                        | `$addButton[1;Example Button!;link;customID;false;😀]`                                       |

</details>

## Beispiel(e)

Dies fügt einen primären und Link-Button zur Nachricht des Bots hinzu:

```javascript
bot.command({
    name: 'addButton',
    code: `
    Hallo!
    $addButton[1;Example Button!;primary;exampleButton;false;💔]
    $addButton[1;Example Button!;link;https://discord.gg;false]
  `
});
```
```javascript
bot.interactionCommand({
    name: 'exampleButton',
    prototype: 'button',
    code: `
    $interactionReply[Awesome Button Interaction!]
  `
});
```