---
title: $interactionDelete
description: $interactionDelete will delete a reply of an interaction.
id: interactionDelete
---

`$interactionDelete` will delete a reply of an interaction.

## Usage

```php
$interactionDelete
```

## Example(s)

This will delete the interaction after 5 seconds.

```javascript
module.exports = [
  {
    name: "interactionDelete",
    type: "interaction",
    prototype: "button",
    code: `
  $interactionDelete
  $wait[5s]
  $interactionReply[Hello, World!;;;;everyone;false]
  `
  },
];
```
