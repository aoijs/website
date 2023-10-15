---
title: $interactionEdit
description: $interactionEdit will return edit an interaction.
id: interactionEdit
---

`$interactionEdit` will return edit an interaction.

## Usage

```php
$interactionEdit[content?;embeds?;components?;files?;allowedMentions?]
```

## Parameters

| Field            | Type                                                                                              | Description                                                                      | Required |
| ---------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | :------: |
| content?         | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | New message content.                                                             |  false   |
| embeds?          | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Embed parser.                                                                    |  false   |
| components?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Component parser.                                                                |  false   |
| files?           | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | File parser.                                                                     |  false   |
| allowedMentions? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Allowed mentions? <br /> 1. **users** <br /> 2. **roles** <br /> 3. **everyone** |  false   |

## Example(s)

```javascript
module.exports = [
  {
    name: "interactionEdit",
    type: "interaction",
    prototype: "slash",
    code: `
  $interactionEdit[Bye, World!;;;;everyone]
  $wait[5s]
  $interactionReply[Hello, World!;;;;everyone;false]
  `,
  },
];
```
