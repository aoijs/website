---
title: $isCommandInteraction
description: $isCommandInteraction will return either true or false depending on the type of the interaction.
id: isCommandInteraction
---

`$isCommandInteraction` will return either true or false depending on the type of interaction.

## Usage

```aoi
$isCommandInteraction
```

## Example(s)

This will return `true` because the function is used within a interaction command.

```js
client.command({
    name: "isCommandInteraction",
    code: ` 
    Hello!
    $addButton[1;Click Me!;primary;ButtonID;false]
    `
    },{
    name: "ButtonID",
    type: "interaction",
    prototype: "button",
    code:`
	$isCommandInteraction
    $interactionReply[Hello World!;everyone;false]
  `
})```
