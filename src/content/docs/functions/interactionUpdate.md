---
title: $interactionUpdate
description: $interactionUpdate will update an existing interaction.
id: interactionUpdate
---

`$interactionUpdate` will return update an existing interaction.

## Usage

```aoi
$interactionUpdate[content]
```

## Parameters

| Field   | Type                                                                                              | Description          | Required |
| ------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| content | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New message content. |   true   |

## Example(s)

```javascript
module.exports = [{
  name: "interactionUpdate",
  type: "interaction",
  prototype: "slash",
  code: `
  $interactionReply[Hello, World! {actionRow:{button:Example Button!:primary:customID:false}};everyone;false]
  `
}];
```

```js
module.exports = [
    {
        name: "customID",
        type: "interaction",
        prototype: "button",
        code: `
  $interactionUpdate[Bye, world.]
  `
    }
];
```

```js
module.exports = [
    {
        name: "customID",
        type: "interaction",
        prototype: "button",
        code: `
  $interactionUpdate[Bye, world. {newEmbed:{title:Hello!}{description:This is an embed!}}]
  `
    }
];
```
