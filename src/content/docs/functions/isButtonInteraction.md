---
title: $isButtonInteraction
description: $isButtonInteraction will return either true or false depending on the type of the interaction.
id: isButtonInteraction
---

`$isButtonInteraction` will return either true or false depending on the type of interaction.

## Usage

```aoi
$isButtonInteraction
```

## Example(s)

This will return `true` because the function is used within a `button` interaction command.

```js
client.command({
    name: "isButtonInteraction",
    code: ` 
    Hello!
    $addButton[1;Click Me!;primary;ButtonID;false]
    `
    },{
    name: "ButtonID",
    type: "interaction",
    prototype: "button",
    code:`
	$isButtonInteraction
    $interactionReply[Hello World!;everyone;false]
     `
    });

  ```