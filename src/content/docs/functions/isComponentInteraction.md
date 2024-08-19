---
title: $isComponentInteraction
description: $isComponentInteraction will return either true or false depending on the type of the interaction.
id: isComponentInteraction
---

`$isComponentInteraction` will return either true or false depending on the type of interaction.

## Usage

```aoi
$isComponentInteraction
```

## Example(s)

This will return `true` because the `button` is a component interaction command.

```js
client.command({
    name: "isComponentInteraction",
    code: ` 
    Hello!
    $addButton[1;Click Me!;primary;ButtonID;false]
    `
    },{
    name: "ButtonID",
    type: "interaction",
    prototype: "button",
    code:`
	$isComponentInteraction
    $interactionReply[Hello World!;everyone;false]
     `
    });

  ```
