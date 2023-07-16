---
title: '$addSelectMenu'
description: '$addSelectMenu wird ein Auswahlmenü zur Nachricht des Bots hinzufügen.'
id: addSelectMenu
---

`$addSelectMenu` wird ein Auswahlmenü zur Nachricht des Bots hinzufügen.

## Verwendung

```php
$addSelectMenu[index;customId;placeHolder;minValues;maxValues;disabled?;label:description:value:default?:emoji?;...]
```

## Verwendung

| Feld         | Typ        | Beschreibung                                                                                                  | Erforderlich |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------- |:------------:|
| index        | ganze Zahl | In welcher Aktionszeile das Auswahlmenü erscheint, benötigt ein Auswahlmenü nur eine ganze Zeile.             |     wahr     |
| kundenID     | string     | Die benutzerdefinierte Komponenten-ID.                                                                        |     wahr     |
| placehalter  | string     | SelectMenü Platzhalter-Text.                                                                                  |     wahr     |
| minute-Werte | ganze Zahl | Minimaler Wert der ausgewählten Optionen                                                                      |     wahr     |
| maxWerte     | ganze Zahl | Maximalen Wert der auswählbaren Optionen                                                                      |     wahr     |
| deaktiviert  | boolean    | Wenn das Auswahlmenü als deaktiviert erscheint- <br /> 1. **true** <br /> 2. **false** (Standard) |     wahr     |
| optionen     | string     | Wählen Sie Menüoptionen getrennt mit `;` und `:`.                                                             |     wahr     |

## Beispiel(e)

Dies fügt ein Auswahlmenü mit zwei Funktionen hinzu:

```javascript
bot.command({
    name: "add-select-menu",
    code: `
  Wählen Sie eine Option.

  $addSelectMenu[1;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option B:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]
  `
});

bot.interactionCommand({
    name: "yourCustomID",
    prototype: "selectMenu",
    code: `
  $interactionReply[Hallo! :);;;;jeder;falsch]
  $onlyIf[$interactionData[values[0]]==anotherCustomID;]
  `
});

bot.interactionCommand({
    name: "yourCustomID",
    prototype: "selectMenu",
    code: `
  $interactionReply[Hallo! :);;;;;jeder;falsch]
  $onlyIf[$interactionData[values[0]]==andAnotherCustomID;]
  `
});

/* 
Wir verwenden "$onlyIf[$interactionData[values[0]]==customID;]", um sicherzustellen, dass dies nur für die entsprechende Menüoption ausgelöst wird.

Stellen Sie auch sicher, dass Sie das "onInteractionCreate" Event in Ihrer Hauptdatei haben (index.js in den meisten Fällen).
*/
```

Handlerbeispiel:

```js
module.exports = [{
    name: "add-select-menu",
    code: `
     Wählen Sie eine Option.
     $addSelectMenu[1;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option B:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]
  `
}, {
    Name: "yourCustomID",
    type: "interaction", // Klarstellung des Interaktions-
    Prototyps: "selectMenu",
    Code: `
     $interactionReply[Hallo! :);;;;jeder ;falsch]
     $onlyIf[$interactionData[values[0]]==Eine andere CustomID; `
}, {
    Name: "yourCustomID",
    type: "interaction", // Klarstellung des Interaktions-
    Prototyps: "selectMenu",
    Code: `
     $interactionReply[Bye! :(;;;;;jeder;falsch]
     $onlyIf[$interactionData[values[0]]==andAnotherCustomID;]`
}]
```