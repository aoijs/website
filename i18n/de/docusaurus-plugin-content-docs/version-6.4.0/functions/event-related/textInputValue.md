---
title: '$textInputValue'
description: '$textInputValue gibt Daten einer Kontextmenüoption zurück.'
id: textInputValue
---

`$textInputValue` gibt Daten eines Kontextmenüs zurück.

## Verwendung

```php
$textInputValue[option]
```

## Verwendung

| Feld      | Typ    | Beschreibung                                 | Erforderlich |
| --------- | ------ | -------------------------------------------- |:------------:|
| variieren | string | Option <br /> 1. **Name (der Option)** |     wahr     |

## Beispiel(e)

Dadurch wird ein Button und ein Modal erzeugt, der die eingegebenen Daten an den gleichen Kanal sendet und dem Benutzer, der das Formular eingereicht hat, eine kurzlebige Antwort gibt:

Bitte beachten Sie, dass Sie "**Ereignisse benötigen: ["onMessage", "onInteractionCreate"]**" in Ihrer Hauptdatei (auch bekannt als in den meisten Fällen index.js)

```js
bot.command({
    name: "interactionModal",
    code: `
$addButton[1;Press Me!;primary;exampleID;false]
Schönes Beispiel!`
}); // Erstelle einen Button, der den Modus auslöst.

bot.interactionCommand({
    name: "exampleID",
    Prototyp: "button", // Verwendung von "prototype" als diese Interaktion gehört zu einem Button.
    code: `
$interactionModal[Beispiel!;customID;
  {actionZeile
    {textInput:Wie lautet dein Name?:1:nameInput:true:Dein hübscher Name! 2:200}
  }
  {actionRow:
    {textInput:Was ist dein Alter?:1:ageInput:true:Du junge Seele! 1:3}
  }
  {actionRow:
    {textInput:Was ist dein Geschlecht?:2:genderInput:true:Alles wird funktionieren! 1:10}
  }
]`
}); /* Der Modal selbst, wir verwenden {textInput} , um Benutzereingaben zu akzeptieren.

Die korrekte Verwendung von {textInput} wäre:

{textInput:title:type (1 : kleines Textfeld) 2 : großes Textfeld):customID:required ( true false ):placeholder:minVal:maxVal}

*/

bot. nteractionCommand({
    name: "customID",
    prototype: "modal", // Verwendung von "prototype" als diese Interaktion gehört zu einem Modal.
    code: `
$interactionReply[Thanks for submitting this form!;;;;everyone;true]

$title[$username submitted a form!;$userAvatar]
$addField[Their name is..;$textInputValue[nameInput]]
$addField[Their age is..;$textInputValue[ageInput]]
$addField[Their gender is..;$textInputValue[genderInput]]`
}); /* Gibt die Werte zurück, die früher vom Modus eingegeben wurden. Benutze $textInputValue um diese abzurufen.

Alternativ können Sie $channelSendMessage[channelID;content] verwenden, um die Daten an einen anderen Kanal zu senden.
$channelSendMessage[$channelID;{newEmbed:{title:$username submitted a form!:$userAvatar}{field:Their name is..:$textInputValue[nameInput]}{field:Ihr Alter ist..:$textInputValue[ageInput]}{field:Ihr Geschlecht ist..:$textInputValue[genderInput]}}]
*/
```