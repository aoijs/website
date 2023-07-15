---
title: '$addSelectMenu'
description: '$addSelectMenu will add a select menu to the bot''s message.'
id: addSelectMenu
---

`$addSelectMenu` will add a select menu to the bot's message.

## Modo de uso

```php
$addSelectMenu[index;customId;placeHolder;minValues;maxValues;disabled?;label:description:value:default?:emoji?;...]
```

## Parámetros

| Campo            | Tipo     | Parámetros                                                                                                       | Requerido |
| ---------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |:---------:|
| índice           | entero   | In which actionRow the selectMenu appears, a selectMenu requires one whole row for it alone.                     | verdadero |
| ID personalizado | consulta | The component custom ID.                                                                                         | verdadero |
| placeHolder      | string   | SelectMenu Placeholder Text.                                                                                     |    sí     |
| minValues        | entero   | SelectMenu minimal value of selectable options                                                                   |    sí     |
| maxValues        | entero   | SelectMenu maximal value of selectable options                                                                   | verdadero |
| disabled         | booleano | If the selectMenu will appear as disabled- <br /> 1. **Verdadero** <br /> 2. **falso** (por defecto) | verdadero |
| options          | cadena   | Select menu options separated by eachother with `;` and `:`.                                                     |    sí     |

## Ejemplo(s)

This adds a select menu with two functions:

```javascript
bot.command({
    name: "add-select-menu",
    code: `
  Select an option.

  $addSelectMenu[1;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option B:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]
  `
});

bot.interactionCommand({
    name: "yourCustomID",
    prototype: "selectMenu",
    code: `
  $interactionReply[Hello! :);;;;everyone;false]
  $onlyIf[$interactionData[values[0]]==anotherCustomID;]
  `
});

bot.interactionCommand({
    name: "yourCustomID",
    prototype: "selectMenu",
    code: `
  $interactionReply[Hello! :);;;;everyone;false]
  $onlyIf[$interactionData[values[0]]==andAnotherCustomID;]
  `
});

/* 
We use "$onlyIf[$interactionData[values[0]]==customID;]" to make sure this only will be triggered for the according select menu option.

Also ensure that you have the "onInteractionCreate" event in your main file (index.js in most cases).
*/
```

Handler Example:

```js
module.exports = [{
    name: "add-select-menu",
    code: `
     Select an option.
     $addSelectMenu[1;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option B:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]
  `
}, {
    name: "yourCustomID",
    type: "interaction", // clarifying that this command is an Interaction
    prototype: "selectMenu",
    code: `
     $interactionReply[Hello! :);;;;everyone;false]
     $onlyIf[$interactionData[values[0]]==anotherCustomID;]`
}, {
    name: "yourCustomID",
    type: "interaction", // clarifying that this command is an Interaction
    prototype: "selectMenu",
    code: `
     $interactionReply[Bye! :(;;;;everyone;false]
     $onlyIf[$interactionData[values[0]]==andAnotherCustomID;]`
}]
```