---
title: $addSelectMenu
description: $addSelectMenu will add a select menu to the bot's message.
id: addSelectMenu
---

`$addSelectMenu` will add a select menu to the bot's message.

## Usage

```php
$addSelectMenu[index;customId;placeHolder;minValues;maxValues;disabled?;label:description:value:default?:emoji?;...]
```

## Parameters

| Field       | Type                                                                                                | Description                                                                                  | Required |
| ----------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | :------: |
| index       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | In which actionRow the selectMenu appears, a selectMenu requires one whole row for it alone. |   true   |
| customID    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The component custom ID.                                                                     |   true   |
| placeHolder | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | SelectMenu Placeholder Text.                                                                 |   true   |
| minValues   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | SelectMenu minimal value of selectable options                                               |   true   |
| maxValues   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | SelectMenu maximal value of selectable options                                               |   true   |
| disabled    | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If the selectMenu will appear as disabled- <br /> 1. **true** <br /> 2. **false** (default)  |   true   |
| options     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Select menu options separated by eachother with `;` and `:`.                                 |   true   |

## Example(s)

This adds a select menu with two functions:

```javascript
client.command({
  name: "add-select-menu",
  code: `
  Select an option.
  
  $addSelectMenu[1;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option B:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]
  `
});

module.exports = [
  {
    name: "add-select-menu",
    code: `
     Select an option.
     $addSelectMenu[1;yourCustomID;This is a placeholder!;1;1;false;A Option:Description of option B:anotherCustomID:false;B Option:Description of option B:andAnotherCustomID:true]
  `
  },
  {
    name: "yourCustomID",
    type: "interaction", // clarifying that this command is an Interaction
    prototype: "selectMenu",
    code: `
     $interactionReply[Hello! :);;;;everyone;false]
     $onlyIf[$interactionData[values[0]]==anotherCustomID;]`
  },
  {
    name: "yourCustomID",
    type: "interaction", // clarifying that this command is an Interaction
    prototype: "selectMenu",
    code: `
     $interactionReply[Bye! :(;;;;everyone;false]
     $onlyIf[$interactionData[values[0]]==andAnotherCustomID;]`
  },
];

/* 
We use "$onlyIf[$interactionData[values[0]]==customID;]" to make sure this only will be triggered for the according select menu option.

Also ensure that you have the "onInteractionCreate" event in your main file (index.js in most cases).
*/
```

[dp]: https://discord.com/developers/docs/interactions/message-components#button-object-button-styles
