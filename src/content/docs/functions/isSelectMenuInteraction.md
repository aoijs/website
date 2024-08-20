---
title: $isSelectMenuInteraction
description: $isSelectMenuInteraction will return either true or false depending on the type of the interaction.
id: isSelectMenuInteraction
---

`$isSelectMenuInteraction` will return either true or false depending on the type of interaction.

## Usage

```aoi
$isSelectMenuInteraction
```

## Example(s)

This will return `true` because the function is used within a `selectMenu` interaction command.

```javascript
client.command({
    name: "isSelectMenuInteraction",
    code: `
    Hello!
    $addSelectMenu[1;string;SelectMenu;This is a placeholder!;1;1;false;A Option:Description of option A:optionID]
    `
    },{
    name: "SelectMenu",
    type: "interaction",
    prototype: "selectMenu",
    code:`
    $isSelectMenuInteraction
    $interactionReply[Bye;everyone;false]
  `
});
```