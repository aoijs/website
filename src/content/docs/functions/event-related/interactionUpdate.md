---
title: $interactionUpdate
description: $interactionUpdate will update an existing interaction.
id: interactionUpdate
---

`$interactionUpdate` will return update an existing interaction.

## Usage

```php
$interactionUpdate[content?;embeds?;components?;files?]
```

## Parameters

| Field       | Type   | Description          | Required |
| ----------- | ------ | -------------------- | :------: |
| content?    | string | New message content. |  false   |
| embeds?     | string | Embed parser.        |  false   |
| components? | string | Component parser.    |  false   |
| files?      | string | File parser.         |  false   |

## Example(s)

```javascript
module.exports = [{
  name: "interactionUpdate",
  type: "interaction",
  prototype: "slash",
  code: `
  $interactionReply[Hello, World!;;{actionRow:{button:Example Button!:primary:customID:false}};;everyone;false]
  `,
});
```

```js
module.exports = [
  {
    name: "customID",
    type: "interaction",
    prototype: "button",
    code: `
  $interactionUpdate[Bye, world.]
  `,
  },
];
```
