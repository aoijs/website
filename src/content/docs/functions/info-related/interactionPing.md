---
title: $interactionPing
description: $interactionPing will return the latency of an interaction.
id: interactionPing
---

`$interactionPing` will return the latency of an interaction.

## Usage

```php
$interactionPing
```

**Please note that you require `events: ["onInteractionCreate"]` to be in your main file**

## Example(s)

This will return the latency of an interaction:

```javascript
bot.command({
  name: "interactionPing",
  code: `
 $addButton[1;Test;primary;testButton;false]
 Click me!
  `,
});

module.exports = [
  {
    name: "testButton",
    type: "interaction",
    prototype: "button",
    code: `
  $interactionUpdate[This took me: $interactionPing MS!]
  `,
  },
];
```
