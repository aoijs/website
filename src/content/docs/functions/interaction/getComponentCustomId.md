---
title: $getComponentCustomID
description: $getComponentCustomID returns the custom ID of the current used interaction component.
id: getComponentCustomId
---

`$getComponentCustomID` returns the custom ID of the current used interaction component.

## Usage

```php
$getComponentCustomID
```

## Example(s)

This will return the custom ID of the button, which is `exampleButton`:

```js
client.command({
    name: "examplecommand",
    code: `
    Hello!
    $addButton[1;Example Button!;primary;exampleButton;false;💔]
  `
});
```

```js
client.interactionCommand({
    name: "exampleButton",
    prototype: "button",
    code: `$interactionReply[The button's custom ID: $getComponentCustomID]`
});
```
